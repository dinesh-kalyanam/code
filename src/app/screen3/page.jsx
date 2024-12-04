import React from 'react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const Select = () => {
  return (
    <div className="FromContainer">
      <div className="ChangeCard"> <a href="/"> <Button >
        Change Card
      </Button></a></div>
      <h1 className="FormHeading1">
          Brooklyn Nine-Nine
          </h1>
      <ul className="FormImg">
        <li><img src="image43.png" className="imgform" alt="" /></li>
        <li><img src="image47.png" className="imgform" alt="" /></li>
        <li><img src="image48.png" className="imgform" alt="" /></li>
        <li><img src="image51.png" className="imgform" alt="" /></li>

      </ul>
      <div className="diff">
        <h1 >
          How many questions you wanna have in the quiz?

        </h1>
        <RadioGroup defaultValue={"5 "} aria-labelledby="options" className="flex items-center gap-4">

          <div className="flex items-center gap-5 radio">
            <Label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem className="peer sr-only" />
              <Button className="btn"
                variant="outline"
              >
                5
              </Button>
            </Label>
            <Label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem className="peer sr-only" />
              <Button className="btn"
                variant="outline"

              >
                7
              </Button>
            </Label>
            <Label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem className="peer sr-only" />
              <Button className="btn"
                variant="outline"

              >
                10
              </Button>
            </Label>
            <Label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem className="peer sr-only" />
              <Button className="btn"
                variant="outline"

              >
                15
              </Button>
            </Label>
            <Label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem className="peer sr-only" />
              <Button className="btn"
                variant="outline"

              >
                20
              </Button>
            </Label>
          </div>
        </RadioGroup>
        <h1>
          Difficulty Level
        </h1>
      </div>
      <div className="btnDiff">
        <RadioGroup defaultValue="Easy" >
          <Label><RadioGroupItem className="peer sr-only" value="Easy" htmlFor="Easy" /> <Button variant="outline"> Easy </Button></Label>

          <Label><RadioGroupItem className="peer sr-only" value="Medium" />      <Button variant="outline" > Medium </Button></Label>
          <Label><RadioGroupItem className="peer sr-only" value="Hard" />     <Button variant="outline"> Hard </Button></Label>
        </RadioGroup>

      </div>



    </div>

  )
}
export default Select
