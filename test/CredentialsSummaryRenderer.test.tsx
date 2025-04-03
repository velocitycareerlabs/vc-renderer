import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CredentialsSummaryRenderer } from '../src/components/CredentialsSummaryRenderer';
import { CredentialsRawData } from '../src/types';
import { CREDENTIALS, CREDENTIALS_MAPPED, ISSUERS, DESCRIPTORS, STATUS } from './mocks';

describe('CredentialsSummaryRenderer Component', () => {
  const mockOnClick = jest.fn();
  const mockOnSelect = jest.fn();

  const credentialsPrepared = CREDENTIALS_MAPPED;

  const credentialsRawDataMock: CredentialsRawData = {
    credentials: CREDENTIALS,
    descriptors: DESCRIPTORS,
    issuers: ISSUERS,
  };

  const renderComponent = (props = {}) => {
    const defaultProps = {
      credentialsData: { credentialsPrepared },
      credentialsStatus: STATUS,
      onClick: mockOnClick,
      onSelect: mockOnSelect,
    };

    return render(<CredentialsSummaryRenderer {...defaultProps} {...props} />);
  };

  afterEach(cleanup);
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders 3 cards with credentialsPrepared data', () => {
    renderComponent();
    const cards = screen.getAllByTestId('credential-card');
    expect(cards.length).toBe(3);
    expect(screen.getByText('University of Massachusetts')).toBeInTheDocument();
    expect(screen.getByText('Leadership')).toBeInTheDocument();

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('adam.smith@example.com')).toBeInTheDocument();

    expect(screen.getByText('Badge')).toBeInTheDocument();
    expect(screen.getByText('Open Badge')).toBeInTheDocument();

    expect(screen.getAllByText('verified').length).toBe(3);
    expect(screen.getAllByRole('checkbox').length).toBe(3);
  });

  it('renders with raw data and processes it', () => {
    renderComponent({ credentialsData: credentialsRawDataMock });

    const cards = screen.getAllByTestId('credential-card');
    expect(cards.length).toBe(7);
    expect(screen.getByText('University of Massachusetts')).toBeInTheDocument();
    expect(screen.getByText('Leadership')).toBeInTheDocument();
    expect(screen.getByText('01/09/2018')).toBeInTheDocument();

    expect(screen.getByText('AnatTest Organization')).toBeInTheDocument();
    expect(screen.getByText('Support & Enablement Director')).toBeInTheDocument();
    expect(screen.getByText('Head Office')).toBeInTheDocument();

    expect(screen.getAllByText('Email').length).toBe(2);
    expect(screen.getAllByText('adam.smith@example.com').length).toBe(2);

    expect(screen.getByText('Badge')).toBeInTheDocument();
    expect(screen.getByText('Open Badge')).toBeInTheDocument();

    expect(screen.getAllByText('verified').length).toBe(4);
    expect(screen.getAllByText('revoked').length).toBe(1);
    expect(screen.getAllByText('replaced').length).toBe(1);
    expect(screen.getAllByText('expired').length).toBe(1);
    expect(screen.getAllByRole('checkbox').length).toBe(7);
  });

  it('calls onClick when a card is clicked', () => {
    jest.useFakeTimers();
    renderComponent();
    const cards = screen.getAllByTestId('credential-card');
    fireEvent.click(cards[0]);
    jest.advanceTimersByTime(150);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });

  it('calls onSelect when a card is selected', () => {
    renderComponent();
    const checkbox = screen.getAllByRole('checkbox');
    fireEvent.click(checkbox[0]);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it('renders Footer component when provided', () => {
    const MockFooter = () => <div data-testid="footer">Footer Content</div>;
    renderComponent({ Footer: MockFooter });

    expect(screen.getAllByTestId('footer').length).toBe(3);
    expect(screen.getAllByText('Footer Content').length).toBe(3);
  });
});
