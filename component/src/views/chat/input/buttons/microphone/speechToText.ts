import {MicrophoneStyles} from '../../../../../types/microphone';
import {TextInputEl} from '../../textInput/textInput';
import {Messages} from '../../../messages/messages';
import {MicrophoneButton} from './microphoneButton';

export type AddErrorMessage = Messages['addNewErrorMessage'];

export class SpeechToText extends MicrophoneButton {
  private readonly _recognition?: SpeechRecognition;
  private readonly _textInput: TextInputEl;
  private readonly _interimTextSpan: HTMLSpanElement;
  private readonly _finalTextSpan: HTMLSpanElement;
  private _interimTranscript = '';
  private _finalTranscript = '';
  private prefixText = '';
  private readonly _addErrorMessage: AddErrorMessage;

  constructor(microphone: true | MicrophoneStyles, textInput: TextInputEl, addErrorMessage: AddErrorMessage) {
    super(typeof microphone === 'object' ? microphone : {});
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!speechRecognition) {
      this.changeToUnsupported();
    } else {
      this._recognition = new speechRecognition();
      this._recognition.continuous = true;
    }
    this._textInput = textInput;
    this._finalTextSpan = document.createElement('span');
    this._interimTextSpan = document.createElement('span');
    this._interimTextSpan.id = 'interim-text';
    this.elementRef.onclick = this.buttonClick.bind(this);
    this._addErrorMessage = addErrorMessage;
  }

  private buttonClick() {
    if (this.isActive) {
      this.stop();
    } else {
      this.start();
    }
  }

  private onResult(event: SpeechRecognitionEvent) {
    console.log(event);
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const speechResult = event.results[i][0].transcript.toLowerCase();
      if (event.results[i].isFinal) {
        this._finalTranscript += speechResult;
      } else {
        this._interimTranscript += speechResult;
      }
      this._finalTranscript = SpeechToText.capitalizeFirstLetter(this._finalTranscript);
      // this._finalTextSpan.innerHTML = linebreak(final_transcript);
      this._finalTextSpan.innerHTML = this._finalTranscript;
      this._interimTextSpan.innerHTML = this._interimTranscript;
    }
  }

  private start() {
    if (!this._recognition) return;
    this._recognition.start();
    this._recognition.onresult = this.onResult.bind(this);
    // this._recognition.onspeechend = function () {
    //   this._recognition.stop();
    //   // testBtn.disabled = false;
    //   // testBtn.textContent = 'Start new test';
    // };

    this._recognition.onaudiostart = this.recordingStarted.bind(this);

    this._recognition.onaudioend = this.recordingEnded.bind(this);

    this._recognition.onerror = this.onError.bind(this);

    // this._recognition.onend = function (event) {
    //   //Fired when the speech recognition service has disconnected.
    //   console.log('SpeechRecognition.onend');
    // };
  }

  private recordingStarted() {
    console.log('audio - start');
    this.prepareInputText();
    this.appendSpans();
    this.changeToActive();
  }

  private static isCharASpace(character: string) {
    return !!/^\s*$/.test(character);
  }

  private prepareInputText() {
    this._textInput.removeTextIfPlaceholder();
    TextInputEl.toggleEditability(this._textInput.inputElementRef, false);
    const lastCharacter =
      this._textInput.inputElementRef.textContent?.charAt(this._textInput.inputElementRef.textContent.length - 1) || '';
    this.prefixText = SpeechToText.isCharASpace(lastCharacter) ? '' : ' ';
  }

  // spans are removed when input el innertText is set
  private appendSpans() {
    this._textInput.inputElementRef.appendChild(this._finalTextSpan);
    this._textInput.inputElementRef.appendChild(this._interimTextSpan);
  }

  private processText(text: string, isFinal: boolean) {
    const processedCases = isFinal ? SpeechToText.capitalizeFirstLetter(text) : text;
    return `${isFinal ? this.prefixText : ' '}${processedCases}`;
  }

  private static capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  private stop() {
    this._recognition?.stop();
    this.recordingEnded();
  }

  private recordingEnded() {
    console.log('audio - end');
    this.changeToDefault();
    this.finaliseInputText();
    this.resetTranscript();
  }

  private finaliseInputText() {
    this._textInput.inputElementRef.textContent = this._textInput.inputElementRef.textContent as string;
    TextInputEl.toggleEditability(this._textInput.inputElementRef, true);
  }

  private resetTranscript() {
    this._interimTranscript = '';
    this._finalTranscript = '';
    this._interimTextSpan.innerHTML = '';
    this._finalTextSpan.innerHTML = '';
  }

  private onError() {
    this._addErrorMessage('speechToText', 'speech input error');
    this.recordingEnded();
  }
}