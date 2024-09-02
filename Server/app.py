from flask import Flask, render_template,request
import speech
from gtts import gTTS
import pygame
import io
app=Flask(__name__)
def select_language():
    print("Select the language for text-to-speech conversion:")
    print("1. English (en)")
    print("2. Hindi (hi)")
    print("3. Bengali (bn)")
    print("4. Tamil (ta)")
    print("5. Telugu (te)")

    language_choice = input("Enter the number of your choice: ")

    if language_choice == '1':
        return 'en'
    elif language_choice == '2':
        return 'hi'
    elif language_choice == '3':
        return 'bn'
    elif language_choice == '4':
        return 'ta'
    elif language_choice == '5':
        return 'te'
    else:
        print("Invalid choice. Using default language (en).")
        return 'en'

def text_to_speech(text, language):
    tts = gTTS(text, lang=language)
    return tts

def play_audio_directly(tts):
    audio_data = io.BytesIO()
    tts.write_to_fp(audio_data)
    audio_data.seek(0)

    pygame.mixer.init()
    pygame.mixer.music.load(audio_data)
    pygame.mixer.music.play()

    clock = pygame.time.Clock()
    while pygame.mixer.music.get_busy():
        clock.tick(30) 
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/speech_to_text', methods=['POST'])
def speech_to_text():
    selected_language = request.form.get('language')
    transcription = speech.transcribe_realtime(selected_language)
    return render_template('index.html', transcription=transcription)
@app.route('/text-to-speech', methods=['POST'])
def text_to_speech_route():
    selected_language = request.form['language']
    text = request.form['text']

    tts = text_to_speech(text, selected_language)
    play_audio_directly(tts)

    return render_template('index.html', selected_language=selected_language)

if __name__=="__main__":
    app.run(debug=False)