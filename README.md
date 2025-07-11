# Open Tarot By Regs

An interactive, web-based digital toolkit for the exploration and study of tarot. This application is built as a Single-Page Application (SPA) to provide a fluid, app-like user experience.

---

## Core Mission & Guiding Philosophy

**Open Tarot By Regs** is an educational tool, not a spiritual or fortune-telling device.

The guiding philosophy is one of **transparency, user agency, and historical accuracy**. The application empowers users by allowing them to understand and influence the systems at play, particularly the user-seeded shuffling mechanisms. It is designed to be an interactive, historical view on the systems and symbolism of tarot.

## Core Features

*   **Extensive Spread Library:** Choose from a growing list of classic and modern spreads, including the Celtic Cross, Three Card, Horseshoe, Chakra, and Relationship spreads.
*   **User-Influenced Shuffling:** The card shuffling algorithm is transparently seeded by user input (text, numbers, or timestamps), ensuring that every reading is unique and auditable. The same input will always produce the same shuffle.
*   **Interactive Reading Canvas:** A dynamic reading area that supports pan, zoom (mouse-wheel or pinch), and drag controls for easy navigation of any spread layout, no matter how large.
*   **Blueprint Mode:** Before dealing, see a clear, high-contrast placeholder layout of your chosen spread, making complex positions easy to understand.
*   **Customizable Experience:** Personalize your readings by choosing from a selection of artistic card backs and background cloth textures.
*   **Deterministic Card of the Day:** A new card is drawn each day based on a consistent mathematical formula using the date, providing a shared daily focus for all users.
*   **Searchable Grimoire:** A complete, filterable encyclopedia of the Rider-Waite-Smith tarot deck, including keywords, meanings, and advice for every card.

## Technology Stack

This project is built with a focus on web fundamentals, with no external frameworks for the core application logic.

*   **HTML5:** For semantic and accessible structure.
*   **CSS3:** For modern, responsive layouts using Flexbox and Grid.
*   **Vanilla JavaScript (ES6+):** For all application logic, routing, and interactivity.
*   **Coloris:** A small, dependency-free color picker component.

## Getting Started

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repository-name
    ```
3.  Open the `index.html` file in your web browser. A live server extension for your code editor (like Live Server for VS Code) is recommended for the best experience.

---

## Future Development Roadmap

This project is actively being developed. Here is a look at the features and improvements planned for future iterations.

### Next Up (Medium Priority)

*   [ ] **FEATURE:** Implement interactive dictionary tooltips for specialized terms within the card meanings.
*   [- ] **FEATURE:** Implement a "Color Picker" option for the default card back, allowing for custom solid colors or gradients. *(The groundwork for this is already in the CSS)*.

### Long-Term Vision

*   [ ] **FEATURE:** Integrate Oracle Decks & Crystals.
    *   Design a flexible data source system to handle different item types with different data fields.
    *   Create a new UI component in the Reading Room for drawing "Complementary Items."
*   [ ] **FEATURE:** Implement a comprehensive user theming system using CSS Variables.
*   [ ] **FEATURE:** Allow user-provided image URLs for custom card backs and reading cloth backgrounds.
*   [ ] **FEATURE:** Implement a "Journal" or "Save Reading" functionality.
    *   A simple version could use browser `localStorage`.
    *   A more robust solution could involve migrating the project to a backend service like Firebase for user accounts and a database.
*   [ ] **FEATURE (EXPERIMENTAL):** Integrate with a generative AI for creating custom card backs or place-mats from a text prompt.

## Contributing

Contributions are welcome! If you have an idea for a new feature or have found a bug, please feel free to open an issue. If you would like to contribute code:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is open source and available for personal and educational use.
