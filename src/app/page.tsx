"use client";

import { useEffect } from "react";
import Image from "next/image";

/* ── Apple App Store SVG Badge ── */
function AppStoreBadge({ width = 148, id }: { width?: number; id: string }) {
  return (
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      className="badge-store"
      id={id}
      aria-label="Download Truage on the App Store"
    >
      <svg width={width} height={Math.round(width * 0.303)} viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="36" rx="8" fill="#1E1A24"/>
        <path d="M18.5 8.5c.8-1 1.9-1.7 3-1.8.1 1.3-.4 2.6-1.1 3.5-.8.9-1.8 1.6-3 1.5-.1-1.2.4-2.5 1.1-3.2zm3.6 5.3c1.6.1 3 .9 3.8 2.2-.1 0-2.3 1.3-2.3 3.9 0 3 2.7 4 2.7 4-.1.3-.4 1.4-1.3 2.8-1 1.4-1.9 2.8-3.4 2.8s-1.9-.9-3.6-.9c-1.6 0-2.1.9-3.6.9s-2.4-1.4-3.5-2.8c-1.3-1.6-2.4-4.3-2.4-6.9 0-3.8 2.5-5.8 4.9-5.8 1.3 0 2.4.9 3.2.9.7 0 2-.9 3.5-.9z" fill="white"/>
        <text x="32" y="13" fontSize="7" fill="white" fontFamily="system-ui,sans-serif" fontWeight="400" letterSpacing="0.3">Download on the</text>
        <text x="32" y="25" fontSize="13" fill="white" fontFamily="system-ui,sans-serif" fontWeight="700">App Store</text>
      </svg>
    </a>
  );
}

export default function Home() {
  /* ── Scroll: fade-in animations ── */
  useEffect(() => {
    const els = document.querySelectorAll("[data-fade]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          (e.target as HTMLElement).classList.add("in"); 
          io.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ═══ NAVBAR ═══ */}
      <nav className="nav" id="main-nav">
        <div className="container nav__inner">
          <a href="#" className="nav__logo">
            <span className="nav__brand">TRUAGE</span>
          </a>
          <div className="nav__right">
            <a href="#features" className="nav__link">Features</a>
            <AppStoreBadge width={132} id="nav-cta" />
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="hero" id="hero">
        <div className="container hero__layout">
          {/* LEFT — text */}
          <div>
            {/* Social proof pill directly inspired by Cal AI */}
            <div className="proof-pill" data-fade>
              <div className="proof-pill__avs">
                <div className="proof-pill__av" style={{ zIndex: 3 }}>👩🏽‍.</div>
                <div className="proof-pill__av" style={{ zIndex: 2 }}>👨🏻‍🦱</div>
                <div className="proof-pill__av" style={{ zIndex: 1 }}>👱🏼‍♀️</div>
              </div>
              <span className="proof-pill__text">Loved by <strong>250K+</strong> users with</span>
              <span className="proof-pill__stars">★★★★★</span>
              <span className="proof-pill__text"><strong>4.9</strong> rating</span>
            </div>

            <h1 className="hero__h1" data-fade data-d="1">
              Meet Truage.<br />
              How fast are you <span className="text-gradient">really aging?</span>
            </h1>
            <p className="hero__p" data-fade data-d="2">
              Go beyond the calendar. Truage analyzes <strong>42 facial biomarkers</strong> to reveal your biological skin age—delivering clinical-grade proof that your skincare works.
            </p>

            <div className="hero__ctas" data-fade data-d="3">
              <AppStoreBadge width={160} id="hero-badge" />
            </div>
          </div>

          {/* RIGHT — Dual Phone Layout Placeholder */}
          <div className="hero__vis" data-fade data-d="2">
            <div className="hero__phone hero__phone-1">
              <img src="/scan-real.png" alt="Scan Screen" className="hero__phone-img" />
            </div>
            
            {/* Hand-drawn loop SVG swooping from left phone to right phone */}
            <svg className="hero__arrow" width="80" height="66" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,60 C30,120 80,100 70,50 C60,0 20,20 40,70 C50,100 80,100 110,60 M93,66 L110,60 L109,78" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="hero__phone hero__phone-2">
              <img src="/results-real.png" alt="Results Screen" className="hero__phone-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INFLUENCERS MASONRY GRID ═══ */}

      {/* ═══ FEATURES SPLIT 1 ═══ */}
      <section className="feat" id="features">
        <div className="container feat__layout">
          <div className="feat__text" data-fade>
            <h2 className="feat__h2">See your <span className="text-gradient">pace of aging</span>.</h2>
            <p className="feat__p">
              Your Dashboard gives you the complete picture. Track your <strong>Elasticity, Moisture, and Skin Age</strong> daily.
            </p>
            <p className="feat__p">
              Watch your <strong>Pace of Aging</strong> slow down as you stick to the routines that are scientifically proven to work for your face.
            </p>
          </div>
          <div className="feat__img-wrap" data-fade>
            <div className="feat__card-phone">
              <img src="/feature-home.png" alt="Progress Tracking" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES SPLIT 2 (Reversed) ═══ */}
      <section className="feat">
        <div className="container feat__layout">
          <div className="feat__img-wrap" style={{ order: -1 }} data-fade>
            <div className="feat__card-phone feat__card-phone--right">
              <img src="/feature-skin-age.png" alt="Skin Age Results" />
            </div>
          </div>
          <div className="feat__text" data-fade>
            <h2 className="feat__h2">No more guessing your <span className="text-burgundy">skin health</span>.</h2>
            <p className="feat__p">
              Stop wondering if your routine is working. Truage uses <strong>clinical-grade AI</strong> to scan your face, analyzing <strong>42 unique biomarkers</strong>—from elasticity and moisture to UV damage and pigmentation.
            </p>
            <p className="feat__p">
              Get an instant, objective <strong>Truage Score</strong> every time you scan.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES SPLIT 3 ═══ */}
      <section className="feat">
        <div className="container feat__layout">
          <div className="feat__text" data-fade>
            <h2 className="feat__h2">Set your <span className="text-burgundy">goals</span> and track your <span className="text-gradient">routine</span>.</h2>
            <p className="feat__p">
              Build your <strong>Digital Shelf</strong>. Log your exact AM and PM routines, set consistency goals, and build your streaks.
            </p>
            <p className="feat__p">
              Truage connects the dots between the products you use every day and the <strong>real-world changes</strong> happening in your skin.
            </p>
          </div>
          <div className="feat__img-wrap" data-fade>
            <div className="feat__card-phone">
              <img src="/feature-shelf.png" alt="Digital Shelf" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BOX ═══ */}
      <section className="cta">
        <div className="container">
          <div className="cta__box" data-fade>
            <h2 className="cta__h2">Ready to meet your best skin?</h2>
            <p className="cta__p">Download Truage today and start tracking your progress with just a picture.</p>
            <div className="cta__ctas">
              <AppStoreBadge width={200} id="bottom-cta" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__links-grid">
            <div className="footer__col">
              <h4 className="footer__col-title">Legal</h4>
              <a href="/privacy" className="footer__link">Privacy Policy</a>
              <a href="/terms" className="footer__link">Terms & Conditions</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Support</h4>
              <a href="/manage" className="footer__link">Manage</a>
              <a href="/help" className="footer__link">Help</a>
              <a href="/cancel" className="footer__link">Cancel</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">More</h4>
              <a href="/blog" className="footer__link">Blog</a>
              <a href="/faq" className="footer__link">FAQ</a>
              <a href="mailto:contact@truage.app" className="footer__link">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer__wordmark" aria-hidden="true">TRUAGE</div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} Truage. All rights reserved.
        </div>
      </footer>
    </>
  );
}
