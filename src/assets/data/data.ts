import hero1 from "../images/home/hero1.png";
import hero2 from "../images/home/hero2.png";
import hero3 from "../images/home/hero3.png";
import hero4 from "../images/home/hero4.png";
import hero5 from "../images/home/hero5.png";

const staticCarouselData = {
  item: [
    {
      id: 1,
      title: "Uncover Your Dream Escape",
      sub_title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
      btn: "Book Your Stay now",
      image_path: hero1,
    },
  ],
};

const facilitiesData = {
  item: [
    {
      id: "1",
      title: "Uncover Your Dream Escape",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
      btn: "read more",
      img: hero1,
    },
    {
      id: "2",
      title: "Uncover Your Dream Escape",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
      btn: "read more",
      img: hero2,
    },
    {
      id: "3",
      title: "Uncover Your Dream Escape",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
      btn: "read more",
      img: hero3,
    },
    {
      id: "4",
      title: "Uncover Your Dream Escape",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
      btn: "read more",
      img: hero4,
    },
    {
      id: "5",
      title: "Uncover Your Dream Escape",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      btn: "read more",
      img: hero5,
    },
  ],
};

const RecommendedCategory = [
  {
    name:"packages"
  },
  {
    name:"tickets"
  },
  {
    name:"cars"
  },
  {
    name:"accommodations"
  }
]

export { staticCarouselData, facilitiesData, RecommendedCategory };
