import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Truage',
};

export default function TermsPage() {
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
          <h1>Terms of Service</h1>
          <p className="legal-date">Effective Date: June 17, 2026</p>

          <h2>1. Introduction</h2>
          <p>Welcome to Truage ("the App"). By downloading, accessing, or using the App, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.</p>

          <h2>2. App Services</h2>
          
          <h3>2.1 Features</h3>
          <p>Truage provides users with features including, but not limited to:</p>
          <ul>
            <li>Facial analysis and age estimation using artificial intelligence</li>
            <li>Tracking and monitoring of aging progress over time</li>
            <li>Pace of aging calculations and related statistics</li>
            <li>Access to historical analysis data and trends</li>
          </ul>

          <h3>2.2 Medical Disclaimer</h3>
          <p><strong>CRITICAL NOTICE: The App and its AI-driven analysis features are designed for informational and entertainment purposes only.</strong></p>
          <ul>
            <li>The App does not provide medical advice, medical diagnosis, or treatment.</li>
            <li>The estimations and analysis provided should not be used as a substitute for professional medical consultation or dermatological evaluation.</li>
            <li>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</li>
          </ul>

          <h3>2.3 Pricing and Payments</h3>
          <p>The App is available through auto-renewing subscription options that may include:</p>
          <ul>
            <li>Weekly subscription</li>
            <li>Monthly subscription</li>
            <li>Annual subscription</li>
          </ul>
          <p>Payment terms:</p>
          <ul>
            <li>Subscriptions are purchased through the Apple App Store (in-app purchase) using your Apple ID account.</li>
            <li>All prices are shown in your local currency within the App prior to purchase. Prices may vary by region and are subject to change.</li>
            <li>Payment will be charged to your Apple ID account at confirmation of purchase.</li>
            <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
            <li>If you cancel, you will retain access to premium App features until the end of the current billing period. There are no long-term contracts; you can change or cancel your plan at any time.</li>
          </ul>

          <h3>2.4 Cancellation and Refunds</h3>
          <ul>
            <li><strong>App Store subscriptions:</strong> You can manage your subscriptions and turn off auto-renewal by going to your Apple ID Account Settings after purchase.</li>
            <li><strong>Refunds:</strong> All refund requests for App Store purchases are handled directly by Apple. You can request a refund through reportaproblem.apple.com. We do not have the ability to process direct refunds for purchases made through the App Store.</li>
          </ul>

          <h2>3. User Rights and Obligations</h2>
          
          <h3>3.1 Age and Consent</h3>
          <ul>
            <li>The App is available for users of all ages, but users under 13 must have explicit parent or guardian consent to use the App.</li>
            <li>You are responsible for maintaining the confidentiality of your account and any associated data.</li>
          </ul>

          <h3>3.2 Acceptable Use</h3>
          <p>By using the App, you agree to the following:</p>
          <ul>
            <li>You will only upload or capture photos of yourself, or photos of individuals who have given you explicit consent to analyze their images.</li>
            <li>You agree not to use the App for any unlawful, harassing, or malicious purpose.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
            <li>You agree not to reverse engineer, decompile, or attempt to extract the source code of the App or its AI models.</li>
            <li>You agree not to use the App in any way that could damage, disable, or overburden our infrastructure or backend services.</li>
          </ul>

          <h2>4. Privacy and Data Usage</h2>
          <p>Your privacy is important to us. By using the App, you agree to the collection and use of your information in accordance with our Privacy Policy. Specifically regarding photos:</p>
          <ul>
            <li>Photos uploaded for analysis are processed securely.</li>
            <li>Please review our full Privacy Policy for detailed information on data retention, image handling, and account deletion.</li>
          </ul>

          <h2>5. Changes to Service</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>Modify, update, or discontinue any part of the service, temporarily or permanently, with or without notice.</li>
            <li>Change subscription prices or introduce new premium features.</li>
            <li>Update these Terms of Service. We will notify you of any significant changes, and continued use of the App constitutes acceptance of the new terms.</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, the App is provided "as is" and "as available" without warranties of any kind, either express or implied. We are not responsible or liable for:</p>
          <ul>
            <li>The accuracy, reliability, or correctness of the age estimations, pace of aging calculations, or AI analysis.</li>
            <li>Any decisions or actions taken based on the App's results.</li>
            <li>Interruptions, errors, or delays in service availability.</li>
            <li>Any direct, indirect, incidental, or consequential losses or damages resulting from your use of or inability to use the App.</li>
          </ul>

          <h2>7. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.</p>

          <h2>8. Contact Information</h2>
          <p>If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us at:</p>
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
