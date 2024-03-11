export type Theme =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "";

export type PaymentProvider = "stripe" | "lemonsqueezy";

export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  crisp: {
    id?: string;
    onlyShowOnRoutes?: string[];
  };
  canvas: {
    hideShapes?: boolean;
    hideIcons?: boolean;
    hideBrands?: boolean;
    hideUpload?: boolean;
    hideEraser?: boolean;
    hideDownload?: boolean;
    hideClear?: boolean;
    hideUndoRedo?: boolean;
    hideGrid?: boolean;
    hideFullscreen?: boolean;
  };
  paymentProvider: PaymentProvider;
  stripe: {
    plans: {
      isFeatured?: boolean;
      priceId: string;
      name: string;
      description?: string;
      duration?: string;
      freeDuration?: string;
      price: number;
      priceAnchor?: number;
      credits: number;
      priority: number;
      mode: 'payment' | 'subscription';
      features: {
        name: string;
      }[];
    }[];
  };
  lemonsqueezy: {
    plans: {
      isFeatured?: boolean;
      variantId: number;
      name: string;
      description?: string;
      duration?: string;
      freeDuration?: string;
      price: number;
      priceAnchor?: number;
      credits: number;
      priority: number;
      mode: 'payment' | 'subscription';
      features: {
        name: string;
      }[];
    }[];
  };
  aws?: {
    bucket?: string;
    bucketUrl?: string;
    cdn?: string;
  };
  mailgun: {
    subdomain: string;
    fromNoReply: string;
    fromAdmin: string;
    supportEmail?: string;
    forwardRepliesTo?: string;
  };
  colors: {
    theme: Theme;
    main: string;
  };
  auth: {
    loginUrl: string;
    callbackUrl: string;
  };
}
