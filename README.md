Oasis UI - Bank Verification Portal
A responsive multi-step registration interface built using a HTML, CSS, and JavaScript. This project demonstrates a seamless transition between account selection, personal data entry, and bank verification through a clean, dual-pane layout.

Technical Breakdown
HTML: Provides the semantic structure for the multi-step form segments, including the branding sidebar and interactive form steps.

CSS: Handles the flexbox layout, custom input states, and professional branding elements like the background overlay.

JavaScript: Manages the core logic for state transitions and form validation without needing external libraries.

Code Logic
Navigation: A central showStep() function toggles the .active class to hide or reveal specific sections of the form based on user progress.

Validation: Real-time listeners monitor user input for name length and email formatting, providing immediate feedback.

BVN Enforcement: Uses a specific regular expression (/^[0-9]{11}$/) to ensure the Bank Verification Number is exactly 11 digits before the form can be submitted.

Output
The final project is a fully functional UI that guides users through a 3-step onboarding flow:

Step 1: Choose between "Individual" or "Business" account types with interactive selection states.

Step 2: Enter personal profile details with built-in error handling for empty or invalid fields.

Step 3: Secure bank verification where a success indicator appears once a valid 11-digit BVN is provided.
