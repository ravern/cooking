import styled from "@emotion/styled";
import Link from "next/link";

import deleteDish from "~/fetchers/deleteDish";
import getDishes from "~/fetchers/getDishes";
import useRequest from "~/hooks/useRequest";

export default function AdminDish({ dish }) {
  const { refetch } = useRequest("/api/dishes", getDishes);

  const handleDeleteClick = async () => {
    if (!confirm("Are you sure you want to delete this dish?")) {
      return;
    }
    await deleteDish(dish.id);
    refetch();
  };

  return (
    <Container>
      <Image src={dish.images[0]} />
      <RightContainer>
        <Name>{dish.name}</Name>
        <DescriptionContainer>
          <Description>{dish.description}</Description>
        </DescriptionContainer>
        <ActionsContainer>
          <Link
            href="/admin/dishes/[id]/edit"
            as={`/admin/dishes/${dish.id}/edit`}
          >
            <a>Edit</a>
          </Link>
          <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
        </ActionsContainer>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  & > * + * {
    margin-left: 0.8rem;
  }
`;

const Image = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: cover;
  border: 1px solid black;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;

  & > * + * {
    margin-top: 0.4rem;
  }
`;

const Name = styled.span`
  font-weight: bold;
`;

const DescriptionContainer = styled.div`
  position: relative;
  height: 1.6rem;
`;

const Description = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionsContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 0.8rem;
  }
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  padding: 0;
`;
