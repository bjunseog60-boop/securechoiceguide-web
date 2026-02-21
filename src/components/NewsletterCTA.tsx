export default function NewsletterCTA() {
  return (
    <div className="border border-gray-700 rounded-xl p-8 text-center bg-gray-800">
      <h3 className="font-body text-xl font-semibold text-white mb-2">The Weekly Security Brief</h3>
      <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
        VPN deals, security alerts, and privacy tips delivered every Thursday.
      </p>
      <div className="max-w-md mx-auto">
        <p className="text-sm text-emerald-400 font-medium">Coming soon</p>
        <p className="text-xs text-gray-500 mt-2">Subscribe feature launching shortly.</p>
      </div>
      <p className="text-[11px] text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
