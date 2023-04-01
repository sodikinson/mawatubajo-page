import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            icon="step1"
            title="Phase 1"
            desc1="White Sand Beach,
Beach Club,
Jetty,
Jetty Restaurant,
Commercial Village, Parking Area, Water Villas"
            desc2="
Tribal House & Luxury Eco Resort
"
          />
          <StepItem
            icon="step2"
            title="Phase 2"
            desc1="Boutique Hotel"
            desc2="Luxury Hotel"
          />
          <StepItem
            icon="step3"
            title="Anchor Tenant"
            desc1="MASON, LYD Group, LA FAVELA, LA PLANCHA, LA LAGUNA,"
            desc2="Cafe Kitsune, NARAE KITCHEN"
          />
        </div>
      </div>
    </section>
  );
}
