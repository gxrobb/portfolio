module.exports = {
  reactStrictMode: true,
  // Bundle Font Awesome into the server build instead of loading it as an
  // external. On the Bun runtime, `next dev` otherwise 500s on a fresh `.next`
  // because Bun can't resolve the hashed external symlinks Turbopack creates
  // mid-session.
  transpilePackages: [
    '@fortawesome/fontawesome-free',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/react-fontawesome',
  ],
};
