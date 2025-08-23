import {
  faComment,
  faEnvelope,
  faFileDownload,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, CardHeader } from "@heroui/card"
import { cn } from "@heroui/theme"

const CAPABILITIES = [
  {
    id: 1,
    title: "Personal Q&A",
    description:
      "Ask about my background, skills, experience, or any professional questions you have",
    icon: faComment,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    title: "Navigation",
    description:
      "Navigate to specific sections of my portfolio, open my professional profiles or see where I have been featured",
    icon: faLocationArrow,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "Download Resources",
    description:
      "Download my certifications, resume, or other relevant documents",
    icon: faFileDownload,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    id: 4,
    title: "Send Email",
    description:
      "Send me an email though the AI for communication or opportunities",
    icon: faEnvelope,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
  },
]

const ChatIntroduction = () => {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-15">
      <p className="text-center">
        Meet my AI Self Agent — your intelligent gateway to learn everything
        about my professional journey!
      </p>
      <ul className="grid h-full grid-cols-2 gap-10">
        {CAPABILITIES.map((capability) => (
          <li key={capability.id}>
            <Card className="h-56 bg-slate-700/20 p-1">
              <CardHeader as="header">
                <div
                  className={cn(
                    "mr-3 flex h-8 w-8 items-center justify-center rounded-lg",
                    capability.bgColor,
                  )}
                >
                  <FontAwesomeIcon
                    icon={capability.icon}
                    className={capability.iconColor}
                    fontSize="18"
                  />
                </div>
                <h2 className="text-lg font-semibold">{capability.title}</h2>
              </CardHeader>
              <CardBody>
                <p>{capability.description}</p>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChatIntroduction
