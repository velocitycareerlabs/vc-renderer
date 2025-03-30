# @velocitycareerlabs/vc-renderer

**A library for reusable React components.**

This library provides hooks and components to map credential objects to descriptors and render credential summaries, details, and PDF reports. It is designed for internal use and is currently consumed by the **Webwallet-app** and **VerifyMyCreds** React TypeScript applications.

---

## Features

### Hooks
- **`usePrepareCredentialSummary`**:  
  A hook returning a function to map credentials to summaries.

- **`usePrepareCredentialDetails`**:  
  A hook returning a function to map credentials to details.

### Components
- **`CredentialsSummaryRenderer`**:  
  Renders credential summaries.

- **`CredentialDetailsRenderer`**:  
  Renders credential details.

- **`CredentialRendererPDF`**:  
  Generates and renders credential PDF reports.

---

## Installation

Install the library using Yarn:

```bash
yarn add @velocitycareerlabs/vc-renderer
```
---

## Prerequisites

Ensure the following external dependencies are available in your project:

- **`react`**:  
- **`react-dom`**:  
- **`typescript`**:  
- **`react-i18next`**:  
- **`@mui/material`**:  
- **`@mui/system`**:  
- **`@emotion/react`**:  
- **`@emotion/styled`**:  
- **`@mui/icons-material`**:  

## Usage

To use the library, import the required hooks and components into your application:

### Example: Using `usePrepareCredentialSummary` and `CredentialsSummaryRenderer`
```tsx
import { usePrepareCredentialSummary, CredentialsSummaryRenderer } from '@velocitycareerlabs/vc-renderer';

// Example usage in a React component
const summaries = usePrepareCredentialSummary();
...
<CredentialsSummaryRenderer credentialsData={data} />;
```
## Notes

	- The consuming application is responsible for handling the logic of “selected” credentials. This includes providing a callback for the onSelect event and managing the state update logic to toggle the credential.summary.checked field accordingly.
	-	The consuming application should also manage the logic for “new credentials” by updating the credential.summary.isNewCredential field as part of its state management.
	-	The consuming application can provide a Footer component to the CredentialsSummaryRenderer. The Footer can include any action buttons required by the application.
	-	The consuming application can pass a custom style object, which must follow the styled-components format.