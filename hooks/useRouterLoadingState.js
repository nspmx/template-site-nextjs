import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import NProgress from "nprogress";

NProgress.configure({speed: 1000});

export default function useRouterLoadingState() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) setLoading(true);
      // remove all tooltips on route change
      document.querySelectorAll(".d3plus-tooltip").forEach((el) => el.remove());
      NProgress.start();
    };

    const handleComplete = () => { setLoading(false); NProgress.done(); };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router, router.asPath]);

  return loading;
}
