import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CredentialRendererPDF } from '../src/components/CredentialRendererPDF';
import { CREDENTIALS, CREDENTIALS_MAPPED, ISSUERS, DESCRIPTORS, STATUS } from './mocks';

const credentialsPrepared = CREDENTIALS_MAPPED;

const credentialsRawDataMock = {
  vcs: CREDENTIALS,
  descriptors: DESCRIPTORS,
  issuers: ISSUERS,
};

jest.mock('@react-pdf/renderer', () => ({
  Page: ({ children }) => <div data-testid="pdf-page">{children}</div>,
  View: ({ children, style }) => <div style={style}>{children}</div>,
  Text: ({ children, style }) => <p style={style}>{children}</p>,
  Image: ({ style }) => <img style={style} src="" alt="" />,
  StyleSheet: {
    create: (styles) => styles, // Return the styles directly
  },
  Svg: ({ children }) => <svg>{children}</svg>,
  Path: () => <path />,
}));

describe('CredentialRendererPDF', () => {
  const renderComponent = (props = {}) => {
    const defaultProps = {
      credentialsData: { credentialsPrepared },
      credentialsStatus: STATUS,
      categoriesTitle: { [credentialsPrepared[0].summary.id]: 'Assesment' },
      applicantName: 'John Doe',
      userName: 'Jane Doe',
      appLogo: 'logo',
    };

    return render(<CredentialRendererPDF {...defaultProps} {...props} />);
  };

  afterEach(cleanup);
  it('renders correctly CredentialRendererPDF', () => {
    renderComponent();

    // PageHeader
    const reportSubject = screen.getAllByText('Report Subject');
    expect(reportSubject).toHaveLength(CREDENTIALS_MAPPED.length);
    const applicantName = screen.getAllByText('John Doe');
    expect(applicantName).toHaveLength(CREDENTIALS_MAPPED.length);
    const userName = screen.getAllByText('Jane Doe');
    expect(userName).toHaveLength(CREDENTIALS_MAPPED.length);

    // CredentialHeader
    const issuerName = screen.getAllByText('Regular Issuer');
    const issuerName2 = screen.getAllByText('Velocity Career Labs');
    expect(issuerName).toHaveLength(2);
    expect(issuerName2).toHaveLength(1);
    expect(screen.getByText('Assesment')).toBeInTheDocument();
    const categoriesTitleFallback = screen.getAllByText('Career Credential');
    expect(categoriesTitleFallback.length).toBe(2);
    expect(screen.getAllByText('verified').length).toBe(3);

    // Credential Summary
    const title1 = screen.getByText('University of Massachusetts');
    expect(title1).toBeInTheDocument();

    const title2 = screen.getByText('Email');
    expect(title2).toBeInTheDocument();

    const title3 = screen.getAllByText('Badge');
    expect(title3.length).toBe(2);
  });

  it('renders correctly sidebar when provided', () => {
    const sidebar = { [CREDENTIALS_MAPPED[0].summary.id]: [<p>sidebar1</p>] };
    renderComponent({ sidebarItems: sidebar });
    expect(screen.getByText('sidebar1')).toBeInTheDocument();
  });

  it('renders correctly with raw data and processes it', () => {
    renderComponent({ credentialsData: credentialsRawDataMock });

    const reportSubject = screen.getAllByText('Report Subject');
    expect(reportSubject).toHaveLength(CREDENTIALS.length);
    const categoriesTitleFallback = screen.getAllByText('Career Credential');
    expect(categoriesTitleFallback.length).toBe(6);
    expect(screen.getAllByText('verified').length).toBe(3);
    expect(screen.getAllByText('revoked').length).toBe(1);
    expect(screen.getAllByText('replaced').length).toBe(1);
    expect(screen.getAllByText('expired').length).toBe(1);
    expect(screen.getAllByText('replaced').length).toBe(1);
  });
});
