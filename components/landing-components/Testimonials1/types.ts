export interface Testimonial {
    type: "video" | "tweet";
    id: string;
    text:
    | string
    | {
        type: "default" | "link" | "highlighted" | "breakline";
        text?: string;
    }[];
    fullName: string;
    username?: string;
    avatar?: string;
    poster?: string;
    videoUrl?: string;
    href?: string;
    imageUrl?: string;
}

export interface TestimonialProps {
    testimonials: Testimonial[]
}