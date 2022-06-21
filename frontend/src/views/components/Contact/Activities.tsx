import {
  Box,
  Banner,
  Link,
  Button,
  Icon,
  TextArea,
  List,
  ListItem,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@stripe/ui-extension-sdk/ui";
import { CustomerData, Case, Task, Note } from "../../utils/types";
import { Sanitized } from "../Sanitized";
import { useState } from "react";

export const Activities = ({
  tasks,
  cases,
  notes,
  postNote,
}: {
  tasks: CustomerData["tasks"];
  cases: CustomerData["cases"];
  notes: CustomerData["notes"];
  postNote: (note: string) => void;
}) => {
  const activities = Object.entries({
    Activity: tasks,
    Cases: cases,
    Notes: notes,
  });

  const [note, setNote] = useState("");
  const [noteStatus, setNoteStatus] = useState(false);

  const onNoteChange = (e: any) => setNote(e.target.value);
  const onPostNote = async () => {
    if (!note.trim()) return;
    postNote(note);
    setNoteStatus(true);
    setTimeout(() => {
      setNoteStatus(false);
    }, 3000);
  };

  return (
    <>
      <Tabs fitted size="small">
        <TabList>
          {activities.map(([name]) => (
            <Tab key={name}>{name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {activities.map(([name, entries]) => (
            <TabPanel key={name}>
              <List aria-label={name}>
                {entries?.map((entry) => (
                  <ListItem
                    value={
                      <>
                        <Link
                          type="primary"
                          href={entry?.link}
                          target="_blank">
                          <Button type="primary">
                          View</Button>
                        </Link>
                      </>
                    }
                    title={
                      <Box css={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                        <Sanitized
                          html={(entry as Case).subject || (entry as Note).body}
                        />
                      </Box>
                    }
                    secondaryTitle={
                      <Box>
                        {(entry as Task).tasksubtype
                          ? `Category: ${(entry as Task).tasksubtype}`
                          : (entry as Case).casenumber}
                      </Box>
                    }
                  />
                ))}
              </List>
              {name === "Notes" && (
                <Box css={{ marginTop: "large" }}>
                  <TextArea
                    label="Add Note"
                    placeholder="Leave a note here to sync with SFDC"
                    defaultValue=""
                    onChange={onNoteChange}
                  />
                  <Box css={{ marginTop: "large" }}>
                    <Button onPress={onPostNote}>Send Note</Button>
                  </Box>
                </Box>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Banner
        css={{ marginTop: "large" }}
        style={{
          transition: "opacity 1s",
          ...(noteStatus ? { opacity: 1 } : { opacity: 0 }),
        }}
        type="default"
        title="The note has been successfully posted on your SFDC instance"
        description="Note successfully posted!"
      ></Banner>
    </>
  );
};
