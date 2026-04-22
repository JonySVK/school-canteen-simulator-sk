import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase.js";

/**
 * Uloží výsledok hry do Firestore
 */
export async function saveGameResult({
  percent,
  studentName,
  className,
  code,
  schoolId
}) {
  try {
    await addDoc(collection(db, "gameResults"), {
      percent: percent ?? 0,
      studentName: studentName ?? "unknown",
      class: className ?? null,
      code: code ?? null,
      schoolId: schoolId ?? null,
      createdAt: serverTimestamp()
    });

    console.log("✅ Game result saved");
  } catch (err) {
    console.error("❌ Firestore error:", err);
  }
}