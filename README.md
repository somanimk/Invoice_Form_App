# Invoice Upload App with Login and Formik

This project is a React application built with **Create React App**. It replicates an invoice form design and includes a **login system**, **PDF upload and preview**, and **Formik-powered form** with **localStorage** for session and data persistence.

---

## # Features

### # 1. Login System (No Backend)
- Users can log in using any username and password.
- Form validation is handled using **Formik + Yup**.
- Session is stored in `localStorage`.
- Auto-login support: users stay logged in after refresh.
- Logout functionality clears session and redirects to login.

---

### # 2. Invoice Form UI
- Fully responsive and matches the reference design.
- Form built using **Formik** with validation.
- Sections:
  - Vendor Details
  - Invoice Details
  - Expense Details
  - Comments

---

### # 3. PDF Upload and Display
- Upload PDF using drag-and-drop or file input.
- Preview the uploaded PDF in-app using `<iframe>` or `react-pdf`.

---

### # 4. LocalStorage Persistence
- Form data is saved to `localStorage` on submit.
- Pre-populates fields when the user returns or reloads the page.

---

### # 5. Dummy Data Auto-Fill
- A "Fill with Dummy Data" button populates all form fields and loads a sample PDF instantly.

---

## # Tech Stack

- **React.js** (CRA)
- **Formik + Yup** (form validation)
- **LocalStorage API** (data persistence)
- **react-pdf** or `<iframe>` (PDF display)

---

## # Folder Structure

src/ ├── components/ │ ├── Login.jsx │ ├── InvoiceForm.jsx │ ├── PDFUploader.jsx │ └── DummyDataButton.jsx ├── App.js ├── index.js └── utils/ └── dummyData.js

---

# Live Demo
➡️ https://invoice-form-app-one.vercel.app/

### # Installation

```bash
npm install
# Start Development Server
bash
Always show details

Copy
npm start
Open http://localhost:3000

# Available Scripts
npm start – Runs the app in development mode.

npm run build – Builds the app for production.

npm test – Runs the test watcher in interactive mode.

npm run eject – Ejects the configuration (not reversible).

