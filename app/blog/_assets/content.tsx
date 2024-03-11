import classnames from "classnames";
import Image from "next/image";

import howaGreatLogoHelpsWithBranding from "./blog-contents/how-a-great-logo-helps-with-branding";

import howToDesign3dLogoImg from "@/public/blog/how-to-design-3d/header.png";
import howToDesignLogoHeaderImg from "@/public/blog/how-to-design-a-logo/bakery-logo.png";
import bakeryLogo from "@/public/blog/how-to-design-a-logo/bakery-logo.png";
import holdingHandsLogo from "@/public/blog/how-to-design-a-logo/holding-hands-logo.png";
import barLogo from "@/public/blog/how-to-design-a-logo/bar-logo.png";
import burgerLogo from "@/public/blog/how-to-design-a-logo/burger-logo.png";

import companyAImg from "@/public/blog/how-to-design-3d/company-a.png";
import companyBImg from "@/public/blog/how-to-design-3d/company-b.png";
import companyCImg from "@/public/blog/how-to-design-3d/company-c.png";
import companyDImg from "@/public/blog/how-to-design-3d/company-d.png";
import {
  articleType,
  authorSlugs,
  authors,
  categories,
  categorySlugs,
  styles,
} from "./constants";

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles: articleType[] = [];
