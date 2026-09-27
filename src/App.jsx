import { useEffect, useState } from "react";
import Invitation from "./pages/Invitation";
import { getWeddingData } from "./services/weddingService";
import FirebaseTest from "./components/FirebaseTest";

export default function App() {
  const [weddingData, setWeddingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadWedding() {
      try {
        const data = await getWeddingData("wedding_002");
        setWeddingData(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadWedding();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f1e9]">
        <p className="font-serif text-xl text-[#555846]">
          Բեռնվում է...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f1e9]">
        <p className="text-red-600">
          Տեղի ունեցավ սխալ՝ {error}
        </p>
      </div>
    );
  }

  return  <Invitation data={weddingData} weddingId="wedding_002" />
}