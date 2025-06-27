import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <video src="https://video.flas1-2.fna.fbcdn.net/v/t42.1790-2/511192340_616544911454892_8915020493252235241_n.?_nc_cat=107&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=7u7qBCvvuIUQ7kNvwGwhuJS&_nc_oc=Admx2qwVQdKaaK2JblA-QNx2HMJB6hx0LaKy4Pxn8ZiqzjC6C_Fb-ZlVPy9d8Ur9f0S2dsMTny1S-7LtI5FCy50D&_nc_zt=28&_nc_ht=video.flas1-2.fna&_nc_gid=iXlCmSnRcepV0IM9lNDUmA&oh=00_AfPQ5ZRHTZ7PiLtUY4oirxaxk5wsRoY7XIFuYyTT1BvJdw&oe=68626A05" controls autoPlay loop muted/>
        <video src="https://rr3---sn-q4flrnes.googlevideo.com/videoplayback?expire=1750966093&ei=zS5daJxcgIDhwA-j8tPpDA&ip=172.245.58.23&id=1d61aa7b21e5bc65&itag=22&source=youtube&requiressl=yes&xpc=Eghovf3BOnoBAQ==&met=1750937293,&mh=AU&mm=31&mn=sn-q4flrnes&ms=au&mv=u&mvi=3&pl=23&rms=au,au&susc=daps&obr=googlesyndication.com&ctier=L&mime=video/mp4&vprv=1&rqh=1&dur=14.582&lmt=1744145301195574&mt=1750936693&txp=5432534&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,obr,ctier,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRQIgZzGNib2GtIcMKO-0i3NxgMY81K3IZSa92nNBt0oFt9sCIQDUSzPLDjv02tMvFNVn4vK2Uweo9BbM9KULFRwjBMxa4A==&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRgIhAIdh-yqVknLpExtPrrakwIORVTO-XVg2iESyFweeaKBiAiEAr0MvKez_YQBbuMPwEBsKV3RtKxEXO5ODflTvAYLoPa0=" controls autoPlay loop muted/>
          <iframe src="https://adstransparency.google.com/?authuser=0&region=KR"/>
      </main>
    </div>
  );
}
