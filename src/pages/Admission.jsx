import { AdmissionHeader } from "../components/AdmissionComponents/AdmissionHeader";
import { AdmissioJoinUS } from "../components/AdmissionComponents/AdmissioJoinUS";
import { AdmissionForm } from "../components/AdmissionComponents/AdmissionForm";

export const Admission = () => {
  return (
    <div className="overflow-hidden ">
      <AdmissionHeader />
      <AdmissioJoinUS />
      <AdmissionForm />
    </div>
  );
};
