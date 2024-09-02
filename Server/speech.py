import speech_recognition as sr

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

if __name__ == '__main__':
    selected_language = select_language()
    print(f'Selected language: {selected_language}')

    transcription = transcribe_realtime(selected_language)
    print(f'Transcript: {transcription}')