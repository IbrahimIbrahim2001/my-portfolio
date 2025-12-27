import { timeline } from "@/helpers/timeline-array";
import { TextBox } from "./text-box";
import TimelineItem from "./timeline-item";
import WrapperContainer from "./wrapper";

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
