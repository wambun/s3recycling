const CertificationBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {/* R2 Certification */}
      <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <svg
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
          aria-label="R2 Certified"
        >
          <rect x="2" y="2" width="56" height="36" rx="4" stroke="#22c55e" strokeWidth="2" fill="none" />
          <text x="30" y="18" textAnchor="middle" fill="#22c55e" fontFamily="system-ui" fontSize="12" fontWeight="700">
            R2
          </text>
          <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontFamily="system-ui" fontSize="7" fontWeight="500">
            CERTIFIED
          </text>
        </svg>
      </div>

      {/* ISO 14001 */}
      <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <svg
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
          aria-label="ISO 14001 Certified"
        >
          <rect x="2" y="2" width="76" height="36" rx="4" stroke="#0ea5e9" strokeWidth="2" fill="none" />
          <text x="40" y="18" textAnchor="middle" fill="#0ea5e9" fontFamily="system-ui" fontSize="10" fontWeight="700">
            ISO 14001
          </text>
          <text x="40" y="30" textAnchor="middle" fill="#9ca3af" fontFamily="system-ui" fontSize="7" fontWeight="500">
            ENVIRONMENTAL
          </text>
        </svg>
      </div>

      {/* ISO 45001 */}
      <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <svg
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
          aria-label="ISO 45001 Certified"
        >
          <rect x="2" y="2" width="76" height="36" rx="4" stroke="#8b5cf6" strokeWidth="2" fill="none" />
          <text x="40" y="18" textAnchor="middle" fill="#8b5cf6" fontFamily="system-ui" fontSize="10" fontWeight="700">
            ISO 45001
          </text>
          <text x="40" y="30" textAnchor="middle" fill="#9ca3af" fontFamily="system-ui" fontSize="7" fontWeight="500">
            HEALTH & SAFETY
          </text>
        </svg>
      </div>

      {/* MBE Certified */}
      <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <svg
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
          aria-label="MBE Certified"
        >
          <rect x="2" y="2" width="56" height="36" rx="4" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <text x="30" y="18" textAnchor="middle" fill="#f59e0b" fontFamily="system-ui" fontSize="11" fontWeight="700">
            MBE
          </text>
          <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontFamily="system-ui" fontSize="7" fontWeight="500">
            CERTIFIED
          </text>
        </svg>
      </div>

      {/* NAID Member */}
      <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <svg
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
          aria-label="NAID Member"
        >
          <rect x="2" y="2" width="56" height="36" rx="4" stroke="#ef4444" strokeWidth="2" fill="none" />
          <text x="30" y="18" textAnchor="middle" fill="#ef4444" fontFamily="system-ui" fontSize="10" fontWeight="700">
            NAID
          </text>
          <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontFamily="system-ui" fontSize="7" fontWeight="500">
            MEMBER
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CertificationBadges;
