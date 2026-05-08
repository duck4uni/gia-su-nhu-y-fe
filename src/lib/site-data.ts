import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Heart,
  Languages,
  MapPin,
  Phone,
  School,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CourseItem = {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  format: string;
  description: string;
  highlights: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export type StatItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TestimonialItem = {
  name: string;
  role: string;
  content: string;
  initials: string;
};

export const siteConfig = {
  name: "Trung tâm Giáo dục Như Ý",
  shortName: "Như Ý",
  phone: "0858120455 (Ms Ý)",
  phoneHref: "tel:0858120455",
  address:
    "Số 50 Đường N7, KDC Lavender, xã Thạnh Phú, Vĩnh Cửu, Đồng Nai",
  heroTitle:
    "Đồng hành cùng học sinh và người học ngoại ngữ trên hành trình tiến bộ bền vững.",
  heroDescription:
    "Trung tâm Giáo dục Như Ý cung cấp các khóa học ngoại ngữ Nhật - Hàn - Trung - Anh và dịch vụ gia sư các môn học TH, THCS, THPT với định hướng rõ ràng, môi trường học tập nghiêm túc và hỗ trợ sát nhu cầu thực tế.",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/khoa-hoc", label: "Khóa học" },
  { href: "/lien-he", label: "Liên hệ" },
];

export const features: FeatureItem[] = [
  {
    title: "Môi trường học tập nghiêm túc",
    description:
      "Không gian học tập được tổ chức gọn gàng, tập trung và phù hợp cho cả học sinh phổ thông lẫn người học ngoại ngữ.",
    icon: School,
  },
  {
    title: "Chương trình bám sát nhu cầu",
    description:
      "Từ bổ sung kiến thức trên lớp đến học ngoại ngữ theo mục tiêu cá nhân, trung tâm xây dựng lộ trình phù hợp cho từng nhóm học viên.",
    icon: Sparkles,
  },
  {
    title: "Tư vấn và hỗ trợ rõ ràng",
    description:
      "Phụ huynh và học viên có thể liên hệ trực tiếp để được tư vấn về chương trình học, lịch học và định hướng phù hợp.",
    icon: Users,
  },
];

export const courses: CourseItem[] = [
  {
    slug: "ngoai-ngu",
    title: "Khóa học tiếng Ngoại ngữ",
    subtitle: "Nhật - Hàn - Trung - Anh",
    audience: "Học sinh, sinh viên, người đi làm",
    format: "Lộ trình từ cơ bản đến nâng cao",
    description:
      "Chương trình ngoại ngữ tại Như Ý tập trung vào nền tảng ngôn ngữ, giao tiếp, từ vựng, phát âm và khả năng ứng dụng trong học tập hoặc công việc.",
    highlights: [
      "Có các lớp tiếng Nhật, Hàn, Trung và Anh",
      "Phù hợp cho người mới bắt đầu hoặc cần học bài bản hơn",
      "Được tư vấn định hướng theo mục tiêu học tập thực tế",
    ],
  },
  {
    slug: "gia-su-th",
    title: "Gia sư các môn học TH",
    subtitle: "Khối Tiểu học",
    audience: "Học sinh Tiểu học",
    format: "Kèm theo môn học và năng lực",
    description:
      "Hỗ trợ học sinh Tiểu học xây dựng nền tảng kiến thức, rèn nề nếp học tập và theo sát chương trình trên lớp một cách phù hợp.",
    highlights: [
      "Củng cố kiến thức theo chương trình Tiểu học",
      "Phù hợp với học sinh cần bồi dưỡng nền tảng",
      "Dễ theo, nhẹ nhàng và sát khả năng tiếp thu",
    ],
  },
  {
    slug: "gia-su-thcs",
    title: "Gia sư các môn học THCS",
    subtitle: "Khối Trung học cơ sở",
    audience: "Học sinh THCS",
    format: "Bổ sung kiến thức và ôn tập theo mục tiêu",
    description:
      "Chương trình gia sư THCS giúp học sinh củng cố kiến thức, cải thiện kết quả học tập và chuẩn bị tốt hơn cho những giai đoạn học quan trọng.",
    highlights: [
      "Gia sư theo môn học và theo năng lực từng em",
      "Tăng khả năng tiếp thu bài và tự học",
      "Phù hợp với học sinh cần lộ trình học ổn định",
    ],
  },
  {
    slug: "gia-su-thpt",
    title: "Gia sư các môn học THPT",
    subtitle: "Khối Trung học phổ thông",
    audience: "Học sinh THPT",
    format: "Củng cố, ôn tập và đồng hành theo mục tiêu",
    description:
      "Dành cho học sinh cần học chắc kiến thức, tăng khả năng làm bài và có sự đồng hành phù hợp trong giai đoạn THPT.",
    highlights: [
      "Hỗ trợ theo từng môn học phổ thông",
      "Phù hợp cho nhu cầu học đều hoặc cần bứt tốc",
      "Có thể tư vấn lộ trình học trước khi đăng ký",
    ],
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Điện thoại tư vấn",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone,
  },
  {
    label: "Địa chỉ",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=So+50+Duong+N7+KDC+Lavender+Thanh+Phu+Vinh+Cuu+Dong+Nai",
    icon: MapPin,
  },
];

export const heroTags = [
  "Đào tạo ngoại ngữ",
  "Gia sư TH, THCS, THPT",
  "Tư vấn trực tiếp",
];

export const introBlocks: FeatureItem[] = [
  {
    title: "Ngoại ngữ",
    description:
      "Các khóa tiếng Nhật, Hàn, Trung và Anh được tổ chức theo lộ trình phù hợp với từng nhóm người học.",
    icon: Languages,
  },
  {
    title: "Gia sư phổ thông",
    description:
      "Đồng hành cùng học sinh Tiểu học, THCS và THPT trong quá trình học tập và củng cố kiến thức.",
    icon: GraduationCap,
  },
  {
    title: "Hỗ trợ đăng ký",
    description:
      "Liên hệ trực tiếp với trung tâm để được tư vấn chương trình, lịch học và nhu cầu phù hợp.",
    icon: BookOpen,
  },
];

export const stats: StatItem[] = [
  { value: "500+", label: "Học viên đã theo học", icon: Users },
  { value: "5+", label: "Năm kinh nghiệm", icon: Award },
  { value: "4", label: "Ngôn ngữ đào tạo", icon: Languages },
  { value: "98%", label: "Phụ huynh hài lòng", icon: Star },
];

export const whyUs: WhyItem[] = [
  {
    title: "Giáo viên tận tâm và có kinh nghiệm",
    description:
      "Đội ngũ giáo viên nhiệt tình, có kinh nghiệm thực tế, luôn theo dõi sát sao và hỗ trợ từng học viên để đảm bảo tiến bộ liên tục.",
    icon: Heart,
  },
  {
    title: "Lộ trình học cá nhân hóa",
    description:
      "Chương trình học được xây dựng theo từng cấp độ và mục tiêu riêng, phù hợp với nhu cầu thực tế của từng học viên.",
    icon: TrendingUp,
  },
  {
    title: "Môi trường học tập tốt",
    description:
      "Không gian học tập thoáng đãng, sạch sẽ, tạo điều kiện tập trung học hiệu quả cho cả học sinh phổ thông lẫn người học ngoại ngữ.",
    icon: School,
  },
  {
    title: "Báo cáo kết quả định kỳ",
    description:
      "Phụ huynh được cập nhật tiến độ học tập thường xuyên để đồng hành và hỗ trợ con em tốt hơn trong quá trình học.",
    icon: CheckCircle,
  },
  {
    title: "Lịch học linh hoạt",
    description:
      "Thời gian học linh hoạt, bố trí phù hợp với lịch trình sinh hoạt để không ảnh hưởng đến hoạt động học chính của học sinh.",
    icon: Clock,
  },
  {
    title: "Tư vấn trực tiếp",
    description:
      "Phụ huynh và học viên có thể liên hệ trực tiếp qua số điện thoại để được tư vấn về khóa học phù hợp.",
    icon: Sparkles,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Chị Nguyễn Thanh Hà",
    role: "Phụ huynh học sinh lớp 7",
    content:
      "Con tôi học tại đây được 1 năm, kết quả học tập cải thiện rõ rệt. Thầy cô rất nhiệt tình, luôn sát sao với từng em và thông báo kịp thời cho phụ huynh. Tôi rất an tâm khi gửi con vào đây.",
    initials: "NH",
  },
  {
    name: "Anh Trần Văn Minh",
    role: "Học viên tiếng Nhật",
    content:
      "Tôi học tiếng Nhật từ con số 0 tại trung tâm. Sau 6 tháng đã giao tiếp được cơ bản và đạt kỳ thi N4. Phương pháp giảng dạy thực tế, dễ hiểu và rất hiệu quả với người mới.",
    initials: "VM",
  },
  {
    name: "Chị Lê Thị Hồng",
    role: "Phụ huynh học sinh lớp 10",
    content:
      "Môi trường học rất tốt, con tôi thích đến học mỗi ngày. Điểm Toán và Anh văn tăng lên đáng kể sau vài tháng. Rất xứng đáng và tôi đã giới thiệu thêm cho nhiều bạn bè.",
    initials: "LH",
  },
];
