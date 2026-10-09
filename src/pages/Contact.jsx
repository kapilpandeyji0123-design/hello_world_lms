import { Mail, Phone, MapPin } from 'lucide-react';
import PublicLayout from '../layouts/PublicLayout';

export default function Contact() {
  return (
    <PublicLayout>
      <section className="section container" style={{ paddingTop: 56 }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
          <h1 style={{ fontSize: 34 }}>Get in Touch</h1>
          <p className="section-sub mt-8">Questions about a course, partnership, or your account? We'd love to help.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40 }}>
          <div>
            <div className="card" style={{ padding: 24, marginBottom: 16 }}>
              <div className="flex gap-16 items-center">
                <div className="why-icon"><Mail size={18} /></div>
                <div><div style={{ fontWeight: 600, fontSize: 14 }}>Email</div><div className="text-soft" style={{ fontSize: 13.5 }}>support@smartlearn.io</div></div>
              </div>
            </div>
            <div className="card" style={{ padding: 24, marginBottom: 16 }}>
              <div className="flex gap-16 items-center">
                <div className="why-icon"><Phone size={18} /></div>
                <div><div style={{ fontWeight: 600, fontSize: 14 }}>Phone</div><div className="text-soft" style={{ fontSize: 13.5 }}>+91 80 4567 1234</div></div>
              </div>
            </div>
            <div className="card" style={{ padding: 24 }}>
              <div className="flex gap-16 items-center">
                <div className="why-icon"><MapPin size={18} /></div>
                <div><div style={{ fontWeight: 600, fontSize: 14 }}>Address</div><div className="text-soft" style={{ fontSize: 13.5 }}>4th Floor, Prestige Tech Park, Bengaluru, India</div></div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="field"><label>Name</label><input placeholder="Your full name" /></div>
              <div className="field"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
              <div className="field"><label>Subject</label><input placeholder="How can we help?" /></div>
              <div className="field"><label>Message</label><textarea rows={5} placeholder="Write your message..." /></div>
              <button className="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
