import React, { useEffect, useState } from "react";

interface Service {
  title: string;
  content: string | string[]; // Accept either a string or an array of bullet points
  price: string;
  campaigns?: number; // Still optional, though not displayed separately
  bulet?: string[]; // Optional field for explicit bullet points
}

interface ServiceComparisonProps {
  heading: string;
  services: Service[];
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({ heading, services }) => {
  // State to manage services after hydration
  const [hydratedServices, setHydratedServices] = useState<Service[]>([]);

  // Helper function to convert content to bullet points if not already an array
  const getBulletPoints = (service: Service): string[] => {
    if (service.bulet) return service.bulet; // Use explicit bullet points if provided
    if (Array.isArray(service.content)) return service.content; // Use content array if already an array
    // Split string into sentences as a fallback
    return service.content.split(". ").map((sentence) => sentence.replace(/\.$/, "").trim());
  };

  // Set up services on the client side after hydration
  useEffect(() => {
    // Ensure exactly 3 columns by padding with empty services if necessary
    const paddedServices = [
      ...services.slice(0, 3), // Take first 3 services
      ...Array(Math.max(0, 3 - services.length)).fill({
        title: "",
        price: "",
        content: [],
      }), // Pad with empty services if fewer than 3
    ];
    setHydratedServices(paddedServices);
  }, [services]); // Re-run if services prop changes

  // Get the maximum number of bullet points across all services to ensure consistent rows
  const allBulletPoints = hydratedServices.map(getBulletPoints);
  const maxBulletPoints = Math.max(...allBulletPoints.map((points) => points.length), 1); // Ensure at least 1 row

  // Generate dynamic rows based on bullet points
  const bulletPointRows = Array.from({ length: maxBulletPoints }, (_, index) => ({
    key: `bullet-${index}`,
  }));

  // If not hydrated yet, return a minimal placeholder to avoid mismatch
  if (hydratedServices.length === 0) {
    return (
      <div className="flex flex-col items-left justify-center p-4 lg:p-0 sm:p-8 lg:pb-26 w-full">
        <h2 className="lg:text-5xl text-[#da26ff] text-3xl font-bold text-left lg:b-8 lg:pt-0 md:pt-0 pt-8">
          {heading}
        </h2>
        {/* Placeholder table to match structure */}
        <div className="overflow-x-hidden overflow-y-hidden w-full pt-12">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 font-semibold border-b border-[#da26ff] w-1/3 text-center">-</th>
                <th className="px-4 py-2 font-semibold border-b border-[#da26ff] w-1/3 text-center">-</th>
                <th className="px-4 py-2 font-semibold border-b border-[#da26ff] w-1/3 text-center">-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-neutral-600 px-4 py-6 w-1/3 text-sm sm:text-base">-</td>
                <td className="border-b border-neutral-600 px-4 py-6 w-1/3 text-sm sm:text-base">-</td>
                <td className="border-b border-neutral-600 px-4 py-6 w-1/3 text-sm sm:text-base">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-left justify-center p-4 lg:p-0 sm:p-8 lg:pb-26 w-full">
      <h2 className="lg:text-5xl text-[#da26ff] text-3xl font-bold text-left lg:b-8 lg:pt-0 md:pt-0 pt-8">
        {heading}
      </h2>
      <div className="overflow-x-auto overflow-y-hidden w-full pt-12">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              {hydratedServices.map((service, index) => (
                <th
                  key={index}
                  className="px-4 py-2 font-semibold border-b border-[#da26ff] w-1/3 text-center"
                >
                  <div className="text-2xl">{service.title || "-"}</div>
                  <div className="text-2xl mt-2">{service.price ? `$${service.price}` : "-"}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bulletPointRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="">
                {hydratedServices.map((service, index) => {
                  const bulletPoints = getBulletPoints(service);
                  const bulletIndex = parseInt(row.key.split("-")[1] || "0", 10);
                  return (
                    <td
                      key={index}
                      className="border-b border-neutral-600 px-4 py-6 w-1/3 text-sm sm:text-base"
                    >
                      {row.key.startsWith("bullet-") &&
                        (bulletPoints[bulletIndex] || "-") /* Display "-" if no bullet point */}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(ServiceComparison);