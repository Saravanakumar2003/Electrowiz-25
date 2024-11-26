import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import IDCard from "../components/IDCard";

const IDCardPage = () => {
  const { id } = useParams();
  const [participant, setParticipant] = useState(null);

  useEffect(() => {
    const fetchParticipant = async () => {
      const docRef = doc(db, "registrations", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setParticipant(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchParticipant();
  }, [id]);

  if (!participant) {
    return <div>Loading...</div>;
  }

  return <IDCard participant={participant} />;
};

export default IDCardPage;