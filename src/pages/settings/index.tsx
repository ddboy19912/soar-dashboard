import CustomCard from "@/components/common/CustomCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditProfile from "./sections/EditProfile";
import Preferences from "./sections/Preferences";
import Security from "./sections/Security";

interface TabItem {
  value: string;
  label: string;
  content: string | React.ReactNode;
}

const tabsData: TabItem[] = [
  {
    value: "edit-profile",
    label: "Edit Profile",
    content: <EditProfile />,
  },
  {
    value: "preferences",
    label: "Preferences",
    content: <Preferences />,
  },
  {
    value: "security",
    label: "Security",
    content: <Security />,
  },
];

const Settings = () => {
  return (
    <div className="mt-[25px] chromebook:mt-0">
      <CustomCard
        containerClass="min-h-[717px]"
        contentClass="pt-[22px] pb-[46px] chromebook:pb-[37px] px-5 chromebook:px-[30px]"
      >
        <Tabs defaultValue="edit-profile" className="w-full">
          <div className="w-full relative before:content-[''] before:block before:h-[1px] before:w-full before:bg-secondary-border before:absolute before:bottom-0 before:left-0">
            <TabsList className="bg-transparent p-0 h-full gap-[30px] chromebook:gap-[42px] flex chromebook:inline-flex">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative font-medium rounded-none px-[6px] py-[7px] chromebook:px-4 chromebook:py-[10px] data-[state=active]:bg-transparent data-[state=active]:shadow-none border-none text-[13px] chromebook:text-base leading-[1.2] text-soft-blue data-[state=active]:text-active-link
                        before:content-[''] before:absolute before:h-[3px] before:rounded-t-[10px] before:bg-active-link before:left-0 before:right-0 before:bottom-0 
                        before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out
                        data-[state=active]:before:scale-x-100 basis-1/3"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabsData.map((tab) => (
            <TabsContent className="m-0" key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </CustomCard>
    </div>
  );
};

export default Settings;
