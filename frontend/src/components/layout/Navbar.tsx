export default function Navbar() {
  return (
    <div className="h-20 bg-white border-b flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold">
          Smart Grid Intelligence Platform
        </h1>

        <p className="text-gray-500">
          AI Powered Monitoring Dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-semibold">
          Admin
        </span>

        <div className="w-12 h-12 rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
}