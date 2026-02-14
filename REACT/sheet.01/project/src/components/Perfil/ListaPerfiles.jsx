import Perfil from "./Perfil";

function Lista() {
  return (
    <div>
      <Perfil imge={"https://i.pravatar.cc/150?img=2"} name={"Carlos Pérez"}>
        Desc 1
      </Perfil>
      <Perfil imge={"https://i.pravatar.cc/150?img=1"} name={"Alicia García"}>
        {" "}
        Desc 2
      </Perfil>
      <Perfil imge={"https://i.pravatar.cc/150?img=3"} name={"Lucía Torres"}>
        Desc 3
      </Perfil>
    </div>
  );
}

export default Lista;
