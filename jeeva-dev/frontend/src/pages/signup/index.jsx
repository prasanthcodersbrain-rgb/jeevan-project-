import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    // Simulate async signup — replace with your real auth call
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="auth-page">
      {/* Background video matches landing page aesthetic */}
      <div className="auth-page__background">
        <video autoPlay loop muted playsInline className="auth-page__bg-video">
          <source
            src="https://cdn.prod.website-files.com/696604acc25b997c8d38dea0%2F69706c848574b969f63b9720_luffu-background-video-light_mp4.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/696604acc25b997c8d38dea0%2F69706c848574b969f63b9720_luffu-background-video-light_webm.webm"
            type="video/webm"
          />
        </video>
        <div className="auth-page__overlay" />
      </div>

      <div className="auth-page__content">
        {/* Logo */}
        <Link to="/" className="auth-page__logo">
          <svg fill="none" height="48" viewBox="0 0 77 77" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.8402 0C19.7806 0 15.3141 4.696 15.3141 10.5398V15.3133H10.3886C7.58832 15.3133 4.96288 16.4109 2.99569 18.4039C1.02851 20.397 -0.0341292 23.0376 0.000836173 25.8394C0.0753276 31.4916 4.79261 36.0903 10.5193 36.0903H34.4934C35.3751 36.0903 36.0896 35.3758 36.0896 34.4941V10.52C36.0912 4.84042 31.8999 0 25.8402 0Z" fill="currentcolor" />
            <path d="M39.9224 10.5185V34.4926C39.9224 35.3743 40.6369 36.0888 41.5186 36.0888H65.4927C71.2194 36.0888 75.9367 31.4901 76.0112 25.8379C76.0476 23.0361 74.985 20.3954 73.0178 18.4024C71.0506 16.4094 68.4252 15.3118 65.6249 15.3118H60.6994V10.5383C60.6994 4.696 56.2329 0 50.1733 0C44.1136 0 39.9224 4.8389 39.9224 10.5185Z" fill="currentcolor" />
            <path d="M36.0912 65.4922V41.5181C36.0912 40.6364 35.3767 39.9219 34.495 39.9219H10.5209C4.7942 39.9219 0.0754006 44.5206 0.000909246 50.1728C-0.0355763 52.9746 1.02707 55.6152 2.99425 57.6083C4.96143 59.6013 7.58687 60.6989 10.3871 60.6989H15.3127V65.4724C15.3127 71.3162 19.7791 76.0122 25.8388 76.0122C31.8984 76.0122 36.0897 71.1733 36.0897 65.4937L36.0912 65.4922Z" fill="currentcolor" />
            <path d="M50.1733 76.0122C56.2329 76.0122 60.6994 71.3162 60.6994 65.4724V60.6989H65.6249C68.4252 60.6989 71.0506 59.6013 73.0178 57.6083C74.985 55.6152 76.0476 52.9746 76.0112 50.1728C75.9367 44.5206 71.2194 39.9219 65.4927 39.9219H41.5186C40.6369 39.9219 39.9224 40.6364 39.9224 41.5181V65.4922C39.9224 71.1718 44.1136 76.0107 50.1733 76.0107V76.0122Z" fill="currentcolor" />
          </svg>
        </Link>

        <div className="auth-card">
          <h1 className="auth-card__title">Create your account</h1>
          <p className="auth-card__subtitle">Start your Luffu journey today</p>

          {error && <div className="auth-card__error">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="auth-form__field">
              <label className="auth-form__label" htmlFor="name">Full name</label>
              <input
                className="auth-form__input"
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="auth-form__field">
              <label className="auth-form__label" htmlFor="email">Email</label>
              <input
                className="auth-form__input"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="auth-form__field">
              <label className="auth-form__label" htmlFor="password">Password</label>
              <input
                className="auth-form__input"
                id="password"
                name="password"
                type="password"
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>

            <div className="auth-form__field">
              <label className="auth-form__label" htmlFor="confirm">Confirm password</label>
              <input
                className="auth-form__input"
                id="confirm"
                name="confirm"
                type="password"
                placeholder="••••••••"
                value={form.confirm}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>

            <button
              className={`auth-form__submit button-link w-inline-block${loading ? " auth-form__submit--loading" : ""}`}
              type="submit"
              disabled={loading}
            >
              <div className="button-link__dot" />
              <span className="text">{loading ? "Creating account…" : "Create account"}</span>
              {!loading && (
                <div className="button-link__icon">
                  <div className="w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7.168H10.264V7.104L7.064 4H8.888L12.696 7.808L8.92 11.6H7.08L10.264 8.496V8.448H3V7.168Z" fill="currentcolor" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          </form>

          <p className="auth-card__switch">
            Already have an account?{" "}
            <Link to="/login" className="auth-form__link">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
