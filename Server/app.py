from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import speech
from gtts import gTTS
import pygame
import io

app = Flask(__name__)

CORS(app)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/speech_to_text', methods=['POST'])
def speech_to_text():
    selected_language = request.json.get('language')
    transcription = speech.transcribe_realtime(selected_language)
    return jsonify({'transcription': transcription})

@app.route('/text-to-speech', methods=['POST'])
def text_to_speech_route():
 
    text = request.json.get('text')
    tts = gTTS(text)
    play_audio_directly(tts)

    return jsonify({'message': 'Text converted to speech and played successfully'})

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

if __name__ == "__main__":
    app.run(debug=True)
