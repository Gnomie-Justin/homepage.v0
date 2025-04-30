export default function Contact() {
  return (
    <div style={{
      fontFamily: "serif",
      padding: "2rem",
      color: "#000" // 👈 makes all text black
    }}>
      <h1>Contact GnomeHaus</h1>
      <p>
        Email: <a href="mailto:justin@gnome-haus.com" style={{ color: 'darkgreen' }}>
          justin@gnome-haus.com
        </a>
      </p>
      <p>Address: GnomeHaus, 2108 N ST #8695, Sacramento, CA, 95816, USA</p>
    </div>
  );
}
