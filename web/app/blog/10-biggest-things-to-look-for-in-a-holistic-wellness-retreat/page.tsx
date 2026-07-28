import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { site } from "@/lib/content";

export const metadata = {
  title: "10 Biggest Things To Look For In A Holistic Wellness Retreat",
  description:
    "How to choose a holistic wellness retreat without being swayed by marketing — Heather Moyer's 10 questions.",
};

const questions = [
  {
    n: "1",
    q: "What Are My Personal Goals for Attending a Wellness Retreat?",
    body: [
      "Do you want to become a guide to others, or simply find ways to move through the heartbreak of grief and the pain of trauma? Both are perfectly valid reasons and not being sure yet if you want to help others through their grief is completely valid as well. Many people come to wellness retreats for themselves and discover their calling to help later. Just keep in mind that you are on your own path of transformation and you need to give yourself time to reflect and release what weighs you down, to help connect with others more deeply so you can live with intention, peace, and yes, in time, joy.",
      "After completing a holistic wellness retreat, most people describe it as a life-changing experience. It can be a great way to better understand who you are now as a person, and that you have gained the insight to understand your potential to transform heartbreak into healing. You will also learn the importance of embracing your feelings and listening to the wisdom of your heart.",
    ],
  },
  {
    n: "2",
    q: "Do I Want a Destination Immersion Retreat or a Longer-Term Online Retreat?",
    body: [
      "Some retreats are offered online and attendees are able to attend grief seminars in an online format.",
      "Most people ultimately decide that an immersive retreat out of town is right for them, to get away from life's daily distractions and fully focus on healing. If you decide on an immersion-style retreat, you will become a part of a warm-hearted community and realize you are not alone. In a caring community, you will support each other in your growth and talk about the things that matter. You can share your heart and stories in a more authentic way than online and your pain can be safely witnessed and supported.",
    ],
  },
  {
    n: "3",
    q: "Do I Want to Learn One or Multiple Modes of Healing?",
    body: [
      "If you are interested in only one specific mode of healing, make sure that the retreat teaches it. But consider that many people are interested in trying out various modes as they go through the river of healing. Some may only consider grief yoga, but may receive the greatest benefits from a multi-pronged approach. Someone with a sedentary lifestyle may only consider breath work, but would benefit from a more holistic approach. A retreat that offers many modalities can be more impactful than retreats that focus on one modality.",
    ],
  },
  {
    n: "4",
    q: "Can I Identify With the Retreat Facilitators? What is the Lineage of Their Experience?",
    body: [
      "Ask yourself what is their experience in both understanding and leading wellness retreats. Have they experienced the trauma of losing a loved one? Where are they in their own healing journey? How long have they led retreats, and how many attendees have been supported? What are the important points of the retreats that the leaders emphasize? Can you relate to them, the healing modalities, and the healing experience they provide?",
    ],
  },
  {
    n: "5",
    q: "What Are the Non-Contact Hours? What's Required Outside the Retreat?",
    body: [
      "Make sure that you fully understand all of the work that is involved in preparation for the retreat. Some retreats have a list of required readings but hardly mention the texts while at the retreat. Make sure to ask how your investment in books and reading will directly correlate to the retreat experience.",
      "Some retreats offer very little alone time to process what has been learned. If time alone to process, journal, meditate or seek other forms of creative expression will be essential for you, be sure to ask up front if the retreat will allow for time to be alone to reflect.",
    ],
  },
  {
    n: "6",
    q: "What's Included in the Investment? What's Extra?",
    body: [
      "Many retreats don't list the amount of taxes or meals, for example. Is ground transportation included? Find out typical extra costs so that you have a full picture of your financial commitment. Cheaper is usually not better — it may be a miserable rainy season or the food or lodging are below par. Don't believe the marketing hype as photos can be deceiving. Be willing to pay for a fully supportive staff and comfortable, safe lodging. And don't underestimate the value of purchasing travel insurance for an educational trip.",
    ],
  },
  {
    n: "7",
    q: "What Does a Typical Day Look Like at a Retreat?",
    body: [
      "Understand how the hours of each day are allocated to the various areas of the healing process. Grief yoga practice. Discussion. Peer coaching. Meals. Excursions. Are there activities that are group-oriented? Individually oriented? How do the activities relate to the work areas of emphasis? Will you have time outside the retreat to explore the area?",
    ],
  },
  {
    n: "8",
    q: "Will My Dietary Requirements Be Observed?",
    body: [
      "Many retreat locations can satisfy the majority of dietary requirements. Make sure these align with your health factors, openness, and beliefs.",
    ],
  },
  {
    n: "9",
    q: "How Many People Will Be at the Retreat?",
    body: [
      "Look for a group size that is right for you. Larger groups have a lot of energy and can feel overwhelming to some. If the retreat is on the larger side, how many facilitators will be available each day? Smaller groups (fewer than 12) allow for more in-depth discussions and individualized attention. However, you may have limited points of view in a smaller group, and be dominated by one or two personalities in the space.",
    ],
  },
  {
    n: "10",
    q: "What Do Others Say About This Retreat?",
    body: [
      "The use of online reviews has exploded. Remember that most everyone says their retreat was life-changing. Check out the online reviews — with an educated eye knowing that every review reflects the mindset of the individual. Read enough reviews, both positive and negative, that you have a good overall feel for the place. Ask to speak to some attendees who have been through the retreat. The more prepared you are heading into your healing retreat, the better your experience will be.",
    ],
  },
];

export default function TenBiggestThings() {
  return (
    <>
      <Hero
        image="/images/TianaSheridanPhoto-HMW-12.jpg"
        alt=""
        eyebrow="April 13, 2025 · Wellness"
        title={
          <>
            10 Biggest Things To Look For In A{" "}
            <span className="italic font-accent text-brand-accent">Holistic Retreat.</span>
          </>
        }
      />
      <Section className="bg-brand-bg">
        <article className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-sm text-brand-primary hover:underline">
            ← All posts
          </Link>
          <div className="mt-8 space-y-6 text-brand-text text-lg leading-relaxed">
          <p>
            So you&apos;re interested in attending a holistic wellness retreat? Wonderful!
            You are probably filled with a lot of uncertainty and a lot of questions.
          </p>
          <p className="italic">
            How do you decide which one is right for you while sifting through endless
            options and marketing speak, without being overly swayed by beautiful photos
            or special offers?
          </p>
          <p className="italic">
            What is the best grief and healing retreat that fits your needs and sets you
            up for true healing?
          </p>
          <p>
            A quick Google search for holistic wellness retreats will yield thousands of
            results all over the world. Before long, all this research makes you feel
            like crawling into bed and pulling the covers up over your head.
          </p>
          <p>
            I am here to demystify the selection process and help you know which
            questions to ask. After walking through my own very unique grief journey, here
            are my top 10 questions that will narrow your search down to the very best
            choice for you.
          </p>

          {questions.map((item) => (
            <section key={item.n} className="pt-6">
              <h2 className="font-display text-2xl md:text-3xl text-brand-secondary">
                {item.n}. {item.q}
              </h2>
              {item.body.map((p, i) => (
                <p key={i} className="mt-4">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <p className="pt-6">
            Join me at any one of my wellness retreats throughout the year in the
            beautiful mountains of Mount Shasta, CA. If you are interested,{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-brand-primary underline underline-offset-4 hover:text-brand-secondary transition-colors"
            >
              drop me an email
            </a>
            . I am thrilled to speak with you about your goals and answer your
            questions.
          </p>
          <p className="font-display text-2xl text-brand-primary">HeatherXO</p>
          </div>
        </article>
      </Section>
    </>
  );
}
