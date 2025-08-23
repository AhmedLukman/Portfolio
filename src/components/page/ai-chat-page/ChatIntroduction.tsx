import {
  faComment,
  faEnvelope,
  faFileDownload,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, CardHeader } from "@heroui/card"

const ChatIntroduction = () => {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-15">
      <p className="text-center">
        Meet my AI Self Agent — your intelligent gateway to learn everything
        about my professional journey!
      </p>
      <ul className="grid h-full grid-cols-2 gap-10">
        <li>
          <Card className="h-56 bg-slate-700/20 p-1">
            <CardHeader as="h2">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-purple-600"
                  fontSize="18"
                />
              </div>
              <h2 className="text-lg font-semibold">Personal Q&A</h2>
            </CardHeader>
            <CardBody>
              <p>
                Ask about my background, skills, experience, or any professional
                questions you have
              </p>
            </CardBody>
          </Card>
        </li>
        <li>
          <Card className="h-56 bg-slate-700/20 p-1">
            <CardHeader as="h2">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="text-blue-600"
                  fontSize="18"
                />
              </div>
              <h2 className="text-lg font-semibold">Navigation</h2>
            </CardHeader>
            <CardBody>
              <p>
                Navigate to specific sections of my portfolio, open my
                professional profiles or see where I have been featured
              </p>
            </CardBody>
          </Card>
        </li>
        <li>
          <Card className="h-56 bg-slate-700/20 p-1">
            <CardHeader as="h2">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-100">
                <FontAwesomeIcon
                  icon={faFileDownload}
                  className="text-pink-600"
                  fontSize="18"
                />
              </div>
              <h2 className="text-lg font-semibold">Download Resources</h2>
            </CardHeader>
            <CardBody>
              <p>
                Download my certifications, resume, or other relevant documents
              </p>
            </CardBody>
          </Card>
        </li>
        <li>
          <Card className="h-56 bg-slate-700/20 p-1">
            <CardHeader as="h2">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-600"
                  fontSize="18"
                />
              </div>
              <h2 className="text-lg font-semibold">Send Email</h2>
            </CardHeader>
            <CardBody>
              <p>
                Send me an email though the AI for communication or
                opportunities
              </p>
            </CardBody>
          </Card>
        </li>
      </ul>
    </div>
  )
}

export default ChatIntroduction
