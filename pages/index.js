import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: "serif", padding: "2rem", background: "#f9f7f3", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem" }}>Now is the season of quiet craft and cunning construction.</h1>
      <p style={{ marginTop: "1rem", maxWidth: "600px" }}>
        At GnomeHaus, we build brands with precision and pride so your brilliance shines in the spotlight.
      </p>
      <Link href="/contact" legacyBehavior>
        <a style={{ color: 'darkgreen', textDecoration: 'underline', marginTop: "2rem", display: "inline-block" }}>
          Contact Us
        </a>
      </Link>
    </div>
  );
}
