import React from "react";

import {
  Column,
  Stack,
  Image,
  Row,
  Text,
  Button,
  Slider,
  PagerIndicator,
  Grid,
  List,
  RatingBar,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepageV1Page = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/homepagev2");
  }
  function handleNavigate9() {
    navigate("/categorieswithsidebar");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Stack className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[95px] w-[100%]">
            <Image
              src={"images/img_background.svg"}
              className="absolute lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[95px] inset-[0] object-cover w-[100%]"
              alt="background"
            />
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
              <Row className="items-center justify-start 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[7%]">
                <Image
                  src={"images/img_group19.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                  alt="Group19"
                />
                <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Elliye`}</Text>
              </Row>
              <Row className="items-center justify-center xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[228px] xl:ml-[261px] 2xl:ml-[294px] 3xl:ml-[353px] ml-[392px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] w-[38%]">
                <Text
                  className="common-pointer cursor-pointer hover:font-medium font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  onClick={handleNavigate9}
                >{`Categories`}</Text>
                <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]">{`New Arrival`}</Text>
                <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]">{`Features`}</Text>
                <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]">{`Collections`}</Text>
              </Row>
              <Row className="items-center justify-between lg:ml-[151px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[233px] ml-[259px] w-[15%]">
                <Image
                  src={"images/img_icon.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[33%]"
                  alt="icon"
                />
                <Button
                  className="common-pointer bg-gray_800 font-bold lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[44%]"
                  onClick={handleNavigate1}
                >{`Login`}</Button>
              </Row>
            </Row>
          </Stack>
        </header>
        <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] w-[100%]">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={1}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="absolute inset-[0] w-[100%]"
            items={[...Array(6)].map(() => (
              <>
                <Row className="bg-gray_50 items-center justify-end">
                  <Stack className="lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] w-[49%]">
                    <Image
                      src={"images/img_placeholder.png"}
                      className="absolute bottom-[0] lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain right-[0] w-[41%]"
                      alt="placeholder"
                    />
                    <Image
                      src={"images/img_placeholder_1.png"}
                      className="absolute lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain right-[0] top-[0] w-[41%]"
                      alt="placeholder"
                    />
                    <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[70%]">
                      <Text className="font-normal font-playfairdisplay not-italic lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] text-[96px] text-gray_800 text-left w-[auto]">{`Summer Sale`}</Text>
                      <Text className="font-bold font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_800 text-left w-[auto]">{`50% Off`}</Text>
                      <Text className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[79%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      <Row className="bg-gray_800 font-poppins items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[37%]">
                        <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]">{`Shop Now`}</Text>
                        <Image
                          src={"images/img_arrow.svg"}
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="Arrow"
                        />
                      </Row>
                    </Column>
                  </Stack>
                  <Column className="w-[44%]">
                    <Image
                      src={"images/img_placeholder_2.png"}
                      className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-cover w-[100%]"
                      alt="placeholder"
                    />
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src={"images/img_placeholder_3.png"}
                        className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[46%]"
                        alt="placeholder"
                      />
                      <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[54%]">
                        <Image
                          src={"images/img_placeholder_4.png"}
                          className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover w-[100%]"
                          alt="placeholder"
                        />
                        <Image
                          src={"images/img_button.svg"}
                          className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                          alt="button"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
              </>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 absolute" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 absolute"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[5%] h-[12px] inset-x-[0] mx-[auto] w-[auto]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 absolute"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 absolute"
            sliderRef={sliderRef}
            selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
            unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
          />
        </Stack>
        <Column className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]">{`Categories`}</Text>
            <Text className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]">{`View all`}</Text>
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Column className="bg-gray_50 items-center w-[15%]">
              <Image
                src={"images/img_sweater.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Sweater"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`Jacket`}</Text>
            </Column>
            <Column className="bg-gray_50 items-center w-[15%]">
              <Image
                src={"images/img_tshirt.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Tshirt"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`Shirt`}</Text>
            </Column>
            <Column className="bg-gray_50 items-center w-[15%]">
              <Image
                src={"images/img_pants.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Pants"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`Pants`}</Text>
            </Column>
            <Column className="bg-gray_800 items-center w-[15%]">
              <Image
                src={"images/img_boot.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Boot"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Shoes`}</Text>
            </Column>
            <Column className="bg-gray_50 items-center w-[15%]">
              <Image
                src={"images/img_dress.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Dress"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`Dress`}</Text>
            </Column>
            <Column className="bg-gray_50 items-center w-[15%]">
              <Image
                src={"images/img_belt.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] mx-[auto] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                alt="Belt"
              />
              <Text className="font-normal lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`Accesories`}</Text>
            </Column>
          </Row>
        </Column>
        <Column className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Row className="items-center justify-between mx-[auto] w-[85%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]">{`New Arrivals`}</Text>
            <Text className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]">{`View all`}</Text>
          </Row>
          <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] w-[100%]">
            <Row className="bg-gray_50 items-center justify-center w-[100%]">
              <Image
                src={"images/img_placeholder_5.png"}
                className="lg:h-[369px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[569px] h-[631px] lg:ml-[35px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] ml-[61.5px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] my-[28.5px] object-contain w-[48%]"
                alt="placeholder"
              />
              <Column className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[35px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[55px] mr-[61.5px] lg:my-[155px] xl:my-[177px] 2xl:my-[200px] 3xl:my-[239px] my-[266.5px] w-[31%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Purple Warm Jacket`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
                <Button className="bg-gray_800 font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[82%]">{`Add to Cart`}</Button>
              </Column>
            </Row>
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[100%]">
              <Column className="bg-gray_50 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src={"images/img_placeholder_6.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[29px] xl:mx-[33px] 2xl:mx-[37px] 3xl:mx-[45px] mx-[50.5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Blue Grey Warm Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
              </Column>
              <Column className="bg-gray_50 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src={"images/img_placeholder_7.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Denim Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
              </Column>
              <Column className="bg-gray_50 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src={"images/img_placeholder_8.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Black Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
              </Column>
              <Column className="bg-gray_50 items-center justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]">
                <Image
                  src={"images/img_placeholder_9.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Green Polar Jacket`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Column className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]">{`Featured`}</Text>
            <Text className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]">{`View all`}</Text>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
              <Column className="border-2 border-gray_800 border-solid items-center lg:py-[25px] xl:py-[29px] 2xl:py-[32px] 3xl:py-[39px] py-[43.5px] w-[24%]">
                <Image
                  src={"images/img_placeholder_10.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Black Briefcase`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                <Button className="bg-gray_800 font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.05px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[52%]">{`Add to Cart`}</Button>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src={"images/img_placeholder_11.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[29%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Pink Shirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mb-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src={"images/img_placeholder_12.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[38%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Gray T-shirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mt-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src={"images/img_placeholder_13.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[36%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Red Flannel`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src={"images/img_stylishblacks.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="stylishblacks"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[50%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Black Highheels`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src={"images/img_casualfabrics.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="casualfabrics"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[59%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Casual Grey Shoes`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src={"images/img_shoesisolated.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="shoesisolated"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[40%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Brown Shoes`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mt-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src={"images/img_businessshirt.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="businessshirt"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[43%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Business Shirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src={"images/img_warmpantspxl7.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="warmpantsPXL7"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[55%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Grey Warm Pants`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[24%]">
                <Image
                  src={"images/img_sportj9bzxuy.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="sportJ9BZXUY"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[60%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Green Sport Jacket`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mb-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src={"images/img_travel8v7cnke.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="travel8V7CNKE"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[64%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Purple Warm Jacket`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center mt-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[24%]">
                <Image
                  src={"images/img_womensdenimsk.png"}
                  className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                  alt="womensdenimsk"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[63%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Woman Denim Skirt`}</Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
          </List>
        </Column>
        <Stack className="lg:h-[318px] xl:h-[363px] 2xl:h-[409px] 3xl:h-[490px] h-[544px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74px] w-[100%]">
          <Column className="absolute bg-gray_800 items-center justify-start top-[0] w-[100%]">
            <Text className="font-bold lg:mb-[190px] xl:mb-[218px] 2xl:mb-[245px] 3xl:mb-[294px] mb-[327px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[auto]">{`Summer Collections`}</Text>
          </Column>
          <Stack className="absolute bottom-[0] lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-x-[0] mx-[auto] w-[87%]">
            <Row className="absolute lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 inset-y-[0] items-center justify-between left-[0] right-[2%] w-[98%]">
              <Stack className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
                <Image
                  src={"images/img_image2.png"}
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  alt="image2"
                />
                <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[11%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[36%]">
                  <span className="text-gray_800 font-poppins">
                    <>
                      {`Summer `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-gray_800 font-poppins font-bold">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
              <Stack className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
                <Image
                  src={"images/img_image3.png"}
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  alt="image3"
                />
                <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[36%]">
                  <span className="text-white_A700 font-poppins">
                    <>
                      {`Casual `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 font-poppins font-bold">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
              <Stack className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
                <Image
                  src={"images/img_image4.png"}
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  alt="image4"
                />
                <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[36%]">
                  <span className="text-white_A700 font-poppins">
                    <>
                      {`Big Vibe `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 font-poppins font-bold">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
            </Row>
            <Image
              src={"images/img_next.svg"}
              className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] inset-y-[0] my-[auto] object-contain right-[0] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
              alt="next"
            />
          </Stack>
        </Stack>
        <Column className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]">{`Popular This Week`}</Text>
            <Text className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]">{`View all`}</Text>
          </Row>
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Row className="items-center justify-start w-[100%]">
              <Image
                src={"images/img_placeholder_14.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[42%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Checkered Jacket`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src={"images/img_placeholder_15.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[34%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Elegant Jacket`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src={"images/img_placeholder_16.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[46%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Blue Woman Denim`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-start w-[100%]">
              <Image
                src={"images/img_placeholder_17.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[33%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Orange Jeans`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src={"images/img_placeholder_18.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]">
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[87%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Blue Jeans`}</Text>
                  <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <RatingBar
                    className="mx-[auto]"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src={"images/img_placeholder_19.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] mr-[106px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[95px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]">
                <Column className="items-start justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] w-[95%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Gray Watch`}</Text>
                  <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <RatingBar
                    className="mx-[auto]"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-start w-[100%]">
              <Image
                src={"images/img_placeholder_20.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[43%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Black Sport Jacket`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src={"images/img_placeholder_21.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[29%]">
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[90%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Wristwatch`}</Text>
                  <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                </Column>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <RatingBar
                    className="mx-[auto]"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-center w-[100%]">
              <Image
                src={"images/img_placeholder_22.png"}
                className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] object-contain w-[43%]"
                alt="placeholder"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[76px] mr-[85px] lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[33%]">
                <Column className="w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Classic Watch`}</Text>
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Row>
          </Grid>
        </Column>
        <Column className="items-start justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Text className="font-bold 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]">{`Why Choose Us`}</Text>
          <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Column className="bg-gray_50 items-center justify-start w-[100%]">
              <List
                className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] mx-[auto] w-[85%]"
                orientation="horizontal"
              >
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src={"images/img_icon_1.svg"}
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[55%]">
                    <Column className="items-start w-[100%]">
                      <Text className="font-bold lg:mx-[14px] xl:mx-[17px] 2xl:mx-[19px] 3xl:mx-[22px] mx-[25.5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Free Delivery`}</Text>
                    </Column>
                    <Text className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src={"images/img_icon_2.svg"}
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[55%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Payment Method`}</Text>
                    <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Text className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]">
                        {
                          <>
                            {`This free shipping`}
                            <br />
                            {`only for selected region`}
                          </>
                        }
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src={"images/img_icon_3.svg"}
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[55%]">
                    <Text className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Warranty`}</Text>
                    <Text className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
                <Column className="lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[384px] items-center justify-center lg:py-[36px] xl:py-[42px] 2xl:py-[47px] 3xl:py-[56px] py-[63px] w-[100%]">
                  <Image
                    src={"images/img_icon_4.svg"}
                    className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] object-contain 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                    alt="icon"
                  />
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[59%]">
                    <Column className="w-[100%]">
                      <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]">{`Customer Support`}</Text>
                    </Column>
                    <Text className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[93%]">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
        <Image
          src={"images/img_brand.svg"}
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] object-contain w-[50%]"
          alt="brand"
        />
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-start lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[80%]">
              <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] w-[28%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]">{`Join our Newsletter`}</Text>
                <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[100%]">
                  {
                    <>
                      {`Drop your email below to get update about us, `}
                      <br />
                      {`lastest news, tips, and more!`}
                    </>
                  }
                </Text>
                <Row className="bg-white_A700 items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[91%]">
                  <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 tracking-ls1 w-[auto]">{`Enter your email`}</Text>
                  <Image
                    src={"images/img_arrow_1.svg"}
                    className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] xl:ml-[107px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[161px] lg:ml-[93px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] xl:mt-[9px] lg:my-[8px] object-contain w-[8%]"
                    alt="Arrow"
                  />
                </Row>
              </Column>
              <Column className="items-start justify-start lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] 3xl:ml-[117px] ml-[131px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] w-[11%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]">{`Product Links`}</Text>
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[61%]">
                  <Text className="font-normal mr-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Categories`}</Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`New Arrival`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Features`}</Text>
                  <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Collections`}</Text>
                </Column>
              </Column>
              <Column className="items-start justify-start 3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[8%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]">{`Company`}</Text>
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[61%]">
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`About`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Blog`}</Text>
                  <Text className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Careers`}</Text>
                  <Text className="font-normal mr-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Contact`}</Text>
                  <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Services`}</Text>
                </Column>
              </Column>
              <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] ml-[154px] lg:ml-[89px] w-[10%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]">{`Support`}</Text>
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-normal lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Support Center`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`FAQ`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Privacy Policy`}</Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]">{`Terms of service`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column className="items-start justify-start xl:mb-[100px] 2xl:mb-[113px] 3xl:mb-[135px] mb-[151px] lg:mb-[88px] 3xl:ml-[117px] ml-[130px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[10%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]">{`Get In Touch`}</Text>
                <Image
                  src={"images/img_sosmedia.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[78%]"
                  alt="sosmedia"
                />
              </Column>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-left text-white_A700 w-[auto]">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV1Page;
