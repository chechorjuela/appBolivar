'use client';
import ClientOnlyWithAuth from "@/lib/component/ClientOnlyWithAuth/ClientOnlyWithAuth";
import LayoutMain from "@/lib/component/layouts/LayoutMain";
import {useDispatch, useSelector} from "react-redux";
import {Suspense, useEffect} from "react";
import {profileRequest} from "@/lib/store/profile/profile.action";

function DashboardPage() {
  const dispatch = useDispatch();
  const profileUser = useSelector((state: any) => state.profile.profileUser);

  useEffect(() => {
    dispatch(profileRequest())
  }, []);

  useEffect(() => {
    console.info(profileUser)
  }, [profileUser]);


  return (
    <ClientOnlyWithAuth>
      <LayoutMain>
        <Suspense fallback={<p>Loading feed...</p>}>
          <h1>DashboardPage Page</h1>
          <h2>Nombre de usuario: {profileUser.display_name}</h2>
          <p><strong>Correo:</strong> {profileUser.display_name}</p>
          <p><strong>Tipo de cuenta:</strong> {profileUser.product}</p>
        </Suspense>
      </LayoutMain>
    </ClientOnlyWithAuth>
  );
}

export default DashboardPage;
