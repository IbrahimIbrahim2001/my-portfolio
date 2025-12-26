import { TextBox } from "./text-box";
import { Badge } from "./ui/badge";
import WrapperContainer from "./wrapper";
import { AiOutlineCheckCircle } from 'react-icons/ai'


interface Content {
  title: string;
  description: string;
}

interface Timeline {
  year: number | string;
  content: Content[]
}

const timeline: Timeline[] = [
  {
    year: 2025,
    content: [
      {
        title: "Real-time Collaboration Development Focus",
        description: "Expanding skills in real-time web applications, exploring WebSocket implementations, and collaborative tools to enhance interactive web experiences.",
      }
    ]
  },
  {
    year: 2024,
    content: [
      {
        title: "Bachelor's Degree in Software Engineering & Information Systems",
        description: "Graduated from Tishreen University. Developed comprehensive full-stack e-commerce platform as graduation project, featuring React frontend, Node.js backend, MySQL database, and recommendation system using Apriori algorithm for intelligent product suggestions.",
      },
      {
        title: "Next.js Framework Exploration",
        description: "Began learning Next.js to understand modern full-stack development patterns, server-side rendering, and production-ready application architecture.",
      }
    ]
  },
  {
    year: 2023,
    content: [
      {
        title: "Dental Laboratory Communication Platform",
        description: "Built semester project using Bootstrap, JavaScript, PHP, and MySQL - a web platform facilitating communication and order management between dentists and dental lab technicians, focusing on practical database design and user workflows.",
      },
      {
        title: "React.js Fundamentals & Component Architecture",
        description: "Started learning React.js, understanding component-based architecture, state management, and building reusable UI components through practical exercises.",
      }
    ]
  },
  {
    year: 2022,
    content: [
      {
        title: "JavaScript Core Concepts & DOM Manipulation",
        description: "Practiced JavaScript fundamentals by building interactive applications including stopwatch with timing functions, todo list with local storage, and theme switcher with DOM manipulation techniques.",
      }
    ]
  },
  {
    year: 2021,
    content: [
      {
        title: "Web Development Foundations",
        description: "Learned HTML5 semantic structure and CSS3 styling including Flexbox and Grid, creating responsive layouts and understanding browser compatibility.",
      }
    ]
  },
  {
    year: 2020,
    content: [
      {
        title: "Introduction to Programming",
        description: "Began programming journey learning fundamental concepts, problem-solving approaches, and basic programming logic that form the foundation of software development.",
      }
    ]
  },
  {
    year: 2019,
    content: [
      {
        title: "University Education Commencement",
        description: "Started undergraduate studies in Software Engineering and Information Systems at Tishreen University, beginning formal education in computer science fundamentals.",
      }
    ]
  },
]

export function TimelineAchievements() {
  return (
    <div className="relative pb-16">
      <WrapperContainer>
        <TextBox text="Timeline of Achievements" />
        {timeline.map((item) => (
          <div key={item.year}>
            <Badge variant="outline" className="px-4 shadow-2xl">
              <p className="text-lg font-semibold">{item.year}</p>
            </Badge>
            {item.content.map((c, index) => (
              <div key={index} className="flex items-start gap-x-3 m-4 text-muted-foreground/80">
                <div className="flex items-center h-6">
                  <AiOutlineCheckCircle className="size-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-md font-semibold">{c.title}</p>
                  <p className="text-sm text-muted-foreground/60">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </WrapperContainer>
    </div>
  )
}
