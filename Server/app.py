from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from gtts import gTTS
import io
import speech_recognition as sr

app = Flask(__name__)
CORS(app)

def select_language():
    print("Select the language for transcription:")
    print("1. English (en-US)")
    print("2. Hindi (hi-IN)")
    print("3. Bengali (bn-IN)")
    print("4. Tamil (ta-IN)")
    print("5. Telugu (te-IN)")
    
    language_choice = input("Enter the number of your choice: ")
    
    if language_choice == '1':
        return 'en-US'
    elif language_choice == '2':
        return 'hi-IN'
    elif language_choice == '3':
        return 'bn-IN'
    elif language_choice == '4':
        return 'ta-IN'
    elif language_choice == '5':
        return 'te-IN'
    else:
        print("Invalid choice. Using default language (en-US).")
        return 'en-US'

def transcribe_realtime(language):
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        transcription = recognizer.recognize_google(audio, language=language)
        return transcription
    except sr.UnknownValueError:
        return "Google Speech Recognition could not understand the audio"
    except sr.RequestError as e:
        return f"Could not request results from Google Speech Recognition service; {e}"

@app.route('/')
def index():
    return "Welcome to Transcribe"

@app.route('/speech', methods=['POST'])
def speech_to_text():
    selected_language = request.json.get('language', 'en-US')  
    transcription = transcribe_realtime(selected_language)
    return jsonify({'transcription': transcription})

@app.route('/text', methods=['POST'])
def text_to_speech_route():
    text = request.json.get('text')
    tts = gTTS(text)
    audio_data = io.BytesIO()
    tts.write_to_fp(audio_data)
    audio_data.seek(0)

    return send_file(audio_data, mimetype="audio/mp3", as_attachment=True, download_name="speech.mp3")

if __name__ == "__main__":
    app.run(debug=True)
