import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { handleclick, handleEdit,handleDelete } from "../utils";
import Dot from "../dot/Dot";

function Colorprovide() {
  const [colors, SetColor] = useState([]);
  useEffect(() => {
    const datas = onSnapshot(collection(db, "colors"), (snapshot) => {
      SetColor(
        snapshot.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }))
      );
    });
    return datas;
  }, []);

  return (
    <div>
      <button
        style={{
          width: "5%",
          height: "30px",
          backgroundColor: "red",
          color: "white",
          fontWeight: "700",
        }}
        onClick={handleclick}
      >
        New
      </button>
      <ul>
        {colors.map((colordata) => {
          return (
            <div key={colordata.id}>
              <li>
                <a href="#" onClick={() => handleEdit(colordata.id)}>
                  edit
                </a>
                <button
                  style={{
                    width: "5%",
                    height: "30px",
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "700",
                    marginLeft:"30px",
                    marginBottom:"10px"
                  }}
                  onClick={() => handleDelete(colordata.id)}
                >
                  delete
                </button>
                <Dot color={colordata.value} />
                {colordata.name}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Colorprovide;
