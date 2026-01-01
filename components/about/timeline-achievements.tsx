import { timeline } from "@/helpers/timeline-array";
import WrapperContainer from "../shared/wrapper";
import { TextBox } from "../shared/text-box";
import TimelineItem from "./timeline-item";

export function TimelineAchievements() {
  return (
    <div className="pb-16">
      <div className="relative">
        <WrapperContainer>
          <TextBox text="Timeline of Achievements" />
          {timeline.map((item) => (
            <TimelineItem key={item.year} item={item} />
          ))}
        </WrapperContainer>
      </div>
    </div>
  )
}
