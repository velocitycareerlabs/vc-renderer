import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { VcDetailsRenderer } from '../src/components/VcDetailsRenderer';
import { CREDENTIALS, CREDENTIALS_MAPPED, ISSUERS, DESCRIPTORS } from './mocks';
import { VcStatusEnum } from '../src/types';

const vcPreparedMock = CREDENTIALS_MAPPED[0];
const mockOnClose = jest.fn();

const vcsRawDataMockAssessment = {
  vc: CREDENTIALS[0],
  descriptor: DESCRIPTORS['AssessmentV1.1'],
  issuer: ISSUERS[CREDENTIALS[0].issuer.id],
};
const vcsRawDataMockEmail = {
  vc: CREDENTIALS[1],
  descriptor: DESCRIPTORS['EmailV1.0'],
  issuer: ISSUERS[CREDENTIALS[1].issuer.id],
};
const vcsRawDataMockOpenBadge = {
  vc: CREDENTIALS[2],
  descriptor: DESCRIPTORS.OpenBadgeCredential,
  issuer: ISSUERS[CREDENTIALS[2].issuer.id],
};
const vcsRawDataMockMissingData = {
  vc: CREDENTIALS[2],
  descriptor: DESCRIPTORS.OpenBadgeCredential,
  issuer: {},
};

describe('VcDetailsRenderer', () => {
  const renderComponent = (props = {}) => {
    const defaultProps = {
      vcData: { vcPrepared: vcPreparedMock },
      vcStatus: VcStatusEnum.VERIFIED,
      categoryTitle: 'Assesment',
      onClose: jest.fn(),
    };

    return render(<VcDetailsRenderer {...defaultProps} {...props} />);
  };

  afterEach(cleanup);

  it('renders correctly with vcPrepared', () => {
    renderComponent();
    // Credential header
    expect(screen.getByRole('img', { name: 'University of Massachusetts' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Regular Issuer' })).toBeInTheDocument();
    expect(screen.getByText('Assesment')).toBeInTheDocument();
    expect(screen.getByText('Verified')).toBeInTheDocument();
    // Credentials details
    const details = screen.getByLabelText('credential-details');
    expect(details.children[0].children.length).toBe(9);
    // Verify there are 3 accordions
    const accordions = document.querySelectorAll('.MuiAccordion-root');
    expect(accordions).toHaveLength(3);

    // Expand the first accordion
    const firstAccordionSummary = accordions[0].querySelector('.MuiAccordionSummary-root');
    if (!firstAccordionSummary) {
      throw new Error('First accordion summary not found');
    }
    fireEvent.click(firstAccordionSummary);

    // Check that the first accordion is expanded
    expect(firstAccordionSummary).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Assessment description')).toBeInTheDocument();
  });
  it('renders correctly with vcRawData - Assesment', () => {
    renderComponent({ vcData: vcsRawDataMockAssessment });
    // Credential header
    expect(screen.getByRole('img', { name: 'University of Massachusetts' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Regular Issuer' })).toBeInTheDocument();
    expect(screen.getByText('Assesment')).toBeInTheDocument();
    expect(screen.getByText('Verified')).toBeInTheDocument();
    // Credentials details
    const details = screen.getByLabelText('credential-details');
    expect(details.children[0].children.length).toBe(9);
    expect(screen.getByText('Assessment description')).toBeInTheDocument();
  });
  it('renders correctly with vcRawData - Email', () => {
    renderComponent({ vcData: vcsRawDataMockEmail });
    // Credential header
    expect(screen.getByRole('img', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Velocity Career Labs' })).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('adam.smith@example.com')).toBeInTheDocument();
    // Credentials details
    const details = screen.queryByLabelText('credential-details');
    expect(details).toBe(null);
  });
  it('renders correctly with vcRawData - OpenBadge', () => {
    renderComponent({ vcData: vcsRawDataMockOpenBadge });
    // Credential header
    expect(screen.getByRole('img', { name: 'Badge' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Regular Issuer' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Badge' })).toBeInTheDocument();
    expect(screen.getByText('Open Badge')).toBeInTheDocument();
    expect(screen.getByText('Residential Electricity')).toBeInTheDocument();
    // Credentials details
    const details = screen.getByLabelText('credential-details');
    expect(details.children[0].children.length).toBe(6);
  });

  it('handles the onClose callback', () => {
    renderComponent({ onClose: mockOnClose });
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('renders related resources when available', () => {
    renderComponent({ vcData: vcsRawDataMockOpenBadge });
    expect(screen.getByText('Attachments')).toBeInTheDocument();
    const attachments = screen.getAllByLabelText('credential-attachment');
    expect(attachments.length).toBe(6);
  });

  it('renders Footer and Sidebar components when provided', () => {
    const Footer = () => <div data-testid="footer">Footer</div>;
    const Sidebar = () => <div data-testid="sidebar">Sidebar</div>;

    renderComponent({ vcData: vcsRawDataMockOpenBadge, Footer, Sidebar });
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('renders credential details with some missing data', () => {
    renderComponent({ vcData: vcsRawDataMockMissingData, categoryTitle: '' });
    // Credential header
    expect(
      screen.getByText('did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g'),
    ).toBeInTheDocument();
    expect(screen.getByText('Career Credential')).toBeInTheDocument();
    // Credentials details
    const details = screen.getByLabelText('credential-details');
    expect(details.children[0].children.length).toBe(6);
  });
});
