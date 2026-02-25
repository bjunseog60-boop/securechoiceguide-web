export const AdSenseUnit = () => (
  <div className="w-full my-8 text-center min-h-[250px] bg-gray-50 flex items-center justify-center border border-gray-100 rounded-lg">
    {/* Google AdSense Auto Ad Unit */}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
  </div>
);

export const ViralVideoGrid = () => (
  <section className="my-10 p-6 rounded-2xl bg-gray-900 border border-gray-800">
    <h3 className="text-xl font-bold mb-2 text-white">Quick Security Tips</h3>
    <p className="text-sm text-gray-400 mb-5">Editor-verified advice to improve your online privacy today.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">&#128274;</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">Enable 2FA Everywhere</p>
          <p className="text-xs text-gray-400">Two-factor authentication blocks 99% of automated attacks. Use an authenticator app, not SMS.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">&#128274;</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">Use a Password Manager</p>
          <p className="text-xs text-gray-400">Unique passwords for every site. Bitwarden is free and open-source. 1Password is excellent for teams.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">&#128274;</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">Turn On a VPN on Public Wi-Fi</p>
          <p className="text-xs text-gray-400">Coffee shop networks are unencrypted. A VPN encrypts your traffic before it leaves your device.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
        <span className="text-emerald-400 text-xl mt-0.5">&#128274;</span>
        <div>
          <p className="font-semibold text-white text-sm mb-1">Check for Data Breaches</p>
          <p className="text-xs text-gray-400">Visit HaveIBeenPwned.com and enter your email. Change passwords for any breached accounts immediately.</p>
        </div>
      </div>
    </div>
  </section>
);
