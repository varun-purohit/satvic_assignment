import WorkshopCard from "../pages/WorkshopCard";
import image1 from "../img/image 1.png";
import image2 from "../img/MM.png";
import image3 from "../img/yoga.png";
import image4 from "../img/cooking.png";

const Layout = () => {
  const workshops = [
    {
      title: "Ultimate Health Challenge",
      description:
        "If you want to reach your ultimate peak health, then this workshop is for you. Learn 7 revolutionary habits over a span of 21 days!",
      instructorDesc: "",
      startDate: "6th May",
      duration: "21 Days",
      language: "English",
      price: 990,
      participants: 3480,
      imageUrl: image1,
      ratings: "4.8",
      reviews: 3034,
    },
    {
      title: "Heal Yourself Challenge",
      description:
        "7 days program to help you learn 3 steps to heal your chronic lifestyle diseases following the Satvic Healing Plan.",
      instructorDesc: "harshvardhan & subah saraf",
      startDate: "6th May",
      duration: "21 Days",
      language: "English",
      price: 990,
      participants: 3480,
      imageUrl: image2,
      ratings: "4.8",
      reviews: 3034,
    },
    {
      title: "Yoga Challenge",
      description:
        "Learn how to manage stress, anxiety, emotional imbalance and fear. Learn yoga philosophy, asanas and meditations to take charge of your joy!",
      instructorDesc: "radika gupta",
      startDate: "6th May",
      duration: "21 Days",
      language: "Hindi, English",
      price: 990,
      participants: 3480,
      imageUrl: image3,
      ratings: "4.8",
      reviews: 3034,
    },
    {
      title: "7-Day Satvic Food Challenge",
      description:
        "Cook-along all three meals with us, and experience the magic of Satvic eating!",
      instructorDesc: "radika gupta",
      startDate: "6th May",
      duration: "21 Days",
      language: "English",
      price: 990,
      participants: 3480,
      imageUrl: image4,
      ratings: "4.8",
      reviews: 3034,
    },
  ];
  return (
    <div className="w-3xl md:max-w-4xl mx-auto">
      <div className="grid grid-cols-1 gap-2 md:gap-6">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={index} {...workshop} />
        ))}
      </div>
    </div>
  );
};
export default Layout;
