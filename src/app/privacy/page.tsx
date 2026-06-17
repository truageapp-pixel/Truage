import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Truage',
};

export default function PrivacyPage() {
  return (
    <>
      <nav className="nav">
        <div className="container nav__inner">
          <Link href="/" className="nav__logo">
            <span className="nav__brand">TRUAGE</span>
          </Link>
        </div>
      </nav>

      <main className="legal">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last Updated: June 17, 2026</p>

          <h2>1. Information Collection</h2>
          <p>Required permissions:</p>
          <ul>
            <li><strong>Camera:</strong> to capture photos of your face for biological age analysis.</li>
            <li><strong>Photo Library:</strong> to select existing photos from your device for analysis.</li>
          </ul>

          <h2>2. Data Usage and Protection</h2>
          <p>Your photos and analysis data are:</p>
          <ul>
            <li>Uploaded securely to our servers to perform AI-driven age and facial analysis.</li>
            <li>Stored securely to allow you to track your aging progress over time.</li>
            <li>Used exclusively to generate your age estimations, pace of aging reports, and related insights.</li>
            <li>Not sold to third parties or data brokers.</li>
            <li>Not used to train public AI models or for any external advertising purposes.</li>
          </ul>

          <h2>3. Data Collection and Usage</h2>
          
          <h3>3.1 Data Not Linked to Your Identity</h3>
          <p>The following data may be collected but is not inherently linked to your real-world identity:</p>
          <ul>
            <li><strong>Usage data:</strong> How you interact with app features and functionality.</li>
            <li><strong>Anonymous analytics data:</strong> Device type, OS version, and crash reports.</li>
          </ul>
          <p>This data is collected and used solely for:</p>
          <ul>
            <li>Ensuring app functionality, performance monitoring, and crash minimization.</li>
            <li>Understanding how features are used to improve the App experience.</li>
            <li>Providing necessary customer support.</li>
          </ul>

          <h3>3.2 Payment and Subscription Data</h3>
          <p>When you subscribe to Truage premium features:</p>
          <p><strong>App Store subscriptions (via Apple):</strong></p>
          <ul>
            <li>Payment processing is handled entirely by Apple.</li>
            <li>We do not receive, process, or store your credit card or sensitive payment details.</li>
            <li>See Apple's Privacy Policy for details on their data handling.</li>
            <li>We use RevenueCat to securely validate your App Store receipts and manage your subscription status. RevenueCat does not collect personally identifiable information beyond anonymized subscriber IDs.</li>
          </ul>

          <h3>3.3 Third-Party Services</h3>
          <p>Truage uses the following trusted third-party services to operate:</p>
          <ul>
            <li><strong>Supabase:</strong> Provides our secure backend infrastructure, user authentication, and data/photo storage. Stores your account information and uploaded photos securely to provide the App's core progress-tracking functionality.</li>
            <li><strong>RevenueCat:</strong> Manages our subscriptions and in-app purchases validation.</li>
            <li><strong>AI Processing Partners (e.g., OpenAI):</strong> Photos uploaded for analysis are securely transmitted to our AI processing partners to estimate your biological age and calculate the pace of aging. These partners act strictly as processors, are bound by strict data processing agreements, and do not retain your photos or use them to train their public consumer models.</li>
          </ul>

          <h2>4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Delete Your Account:</strong> Permanently delete your account and all associated data, including uploaded photos and analysis history, at any time directly through the App's settings.</li>
            <li><strong>Control Permissions:</strong> Revoke Camera and Photo Library access at any time through your iOS device settings.</li>
            <li><strong>Data Access:</strong> Request a copy of the data we have stored about you by contacting our support team.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <ul>
            <li><strong>Account Data and Photos:</strong> Your photos and analysis history are retained as long as your account is active to provide you with historical progress tracking. If you initiate account deletion, all photos, analysis history, and personal data are permanently removed from our active servers.</li>
            <li><strong>Subscription Data:</strong> Anonymized subscription events are retained for financial reporting, analytics, and support purposes.</li>
          </ul>

          <h2>6. Changes to Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify users of any material changes through an in-app notice or via email prior to the changes taking effect. Continued use of the App after changes are made constitutes your acceptance of the revised policy.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about privacy, data protection, or wish to exercise your data rights, please contact us at:</p>
          <p>Email: <a href="mailto:truageapp@gmail.com">truageapp@gmail.com</a></p>
        </div>
      </main>

      <footer className="footer" style={{ borderTop: "1px solid var(--border)", padding: "40px 0 20px" }}>
        <div className="container footer__bottom">
          &copy; {new Date().getFullYear()} Truage. All rights reserved.
        </div>
      </footer>
    </>
  );
}
