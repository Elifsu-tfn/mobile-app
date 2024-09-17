# **Rekabet Kurumu Mobile Application**
This project is a mobile application developed for the **Rekabet Kurumu**. The app provides easy access to the institution's news, quick access options, menu options, and event calendar. It is built using **React Native** and **Expo**.

## Features

- **News:**  
  The app fetches news headlines from a local **SQLite database**, allowing users to stay updated with the latest developments. The news is displayed using a **slider** component, enabling users to easily swipe through multiple headlines. This feature ensures that news is available offline, as it is stored locally within the app.

- **Quick Access:**  
  A visually prominent **Quick Access menu** is featured with a **red background**. This section provides users with shortcuts to frequently used features within the app, improving the overall user experience. The quick access items are designed to be easily tappable for fast navigation.

- **Menu:**  
  The app includes a **hamburger menu button** located at the top right of the interface. When clicked, it reveals additional options and functionalities, such as settings, help, or contact information. This menu helps to keep the user interface clean and organized while providing access to secondary features.

- **Calendar:**  
  The app features an interactive **event calendar** where users can click on specific days to see any events scheduled for that date. This feature is particularly useful for displaying upcoming workshops, conferences, or deadlines related to the Rekabet Kurumu. The calendar is fully navigable and allows users to scroll through months to view past or future events.

- **Search Functionality:**  
  A dedicated search bar is available to allow users to quickly find specific news articles, events, or other relevant content within the app. The search results are dynamically updated as users type, providing a seamless search experience.

- **Social Media Integration:**  
  The app integrates with the Rekabet Kurumu social media channels. **Social media icons** are aligned on the left side of the screen, allowing users to visit official accounts with a single tap. Meanwhile, the **search button** and **menu button** are positioned on the right for easy accessibility.

- **Address and Contact Information:**  
  The app includes detailed contact information for the Rekabet Kurumu, including the physical address of the headquarters in Ankara, Turkey, an official email address, and a phone number. This ensures that users can easily reach out for support or inquiries related to the institution.


## Installation

To run the project on your local machine, follow these steps:
1. Clone the repository:

    ```bash
    git clone https://github.com/Elifsu-tfn/mobile-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd mobile-app
    ```
3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npx expo start
    ```

 
## Technologies

- **React Native**: Used for mobile app development.
- **Expo**: Used for project setup and development.
- **SQLite**: Used to store news data.

## Screenshots
HomePage/News ![anasayfa](https://github.com/user-attachments/assets/6d9b16b8-8192-4d55-b214-a199b78b2cdc)
Quick Access  ![hizlierisim](https://github.com/user-attachments/assets/d3dead06-de0b-4fd4-ab42-4a79a40faf24)
Navigate ![navigate](https://github.com/user-attachments/assets/8325f74c-bad8-45b5-a8c2-39fba494c8d4)
End ![son](https://github.com/user-attachments/assets/673e4073-66ec-403b-9b15-38d79b4176c7)


## Developer

- **Elif Su Tufan**  
  [GitHub](https://github.com/Elifsu-tfn)  
  [LinkedIn](https://www.linkedin.com/in/elif-su-tufan-0306302b4/))
  
## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

MIT License

Copyright (c) 2024 Elif Su Tufan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
